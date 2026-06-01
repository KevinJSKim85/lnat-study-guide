/*
 * timer.js — section countdown timer with start / pause / auto-submit-on-zero.
 *
 * Plan §4 Phase 1.3 / AC-E3:
 *   - Section A = 95:00, Section B (essay) = 40:00.
 *   - Sections are independent timers.
 *   - On reaching 00:00 it auto-locks the section (fires onExpire).
 *   - Pausing is allowed in practice mode; mock mode passes { allowPause:false }.
 *
 * No dependencies; works over file://. Exposes window.LNATTimer.
 * Uses Date.now() deltas (not naive tick counting) so it stays accurate even if
 * the tab is throttled, and is unit-testable by injecting a `now` function.
 */
(function (root) {
  "use strict";

  var SECTION_SECONDS = { A: 95 * 60, B: 40 * 60 };

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /** format seconds -> "MM:SS" (or "HH:MM:SS" if >= 1h). */
  function format(totalSeconds) {
    totalSeconds = Math.max(0, Math.floor(totalSeconds));
    var h = Math.floor(totalSeconds / 3600);
    var m = Math.floor((totalSeconds % 3600) / 60);
    var s = totalSeconds % 60;
    return h > 0 ? h + ":" + pad(m) + ":" + pad(s) : pad(m) + ":" + pad(s);
  }

  /**
   * createTimer
   * @param {Object} opts
   *   @param {String} [opts.section]      "A" | "B" -> sets default duration
   *   @param {Number} [opts.seconds]      explicit duration (overrides section)
   *   @param {Boolean} [opts.allowPause]  default true; mock mode sets false
   *   @param {Function} [opts.onTick]     (remainingSeconds, formattedString)
   *   @param {Function} [opts.onExpire]   called once when remaining hits 0
   *   @param {Function} [opts.now]        injectable clock (default Date.now)
   *   @param {Function} [opts.setInterval] injectable (default root.setInterval)
   *   @param {Function} [opts.clearInterval] injectable
   */
  function createTimer(opts) {
    opts = opts || {};
    var total = typeof opts.seconds === "number"
      ? opts.seconds
      : (SECTION_SECONDS[opts.section] || 0);
    var allowPause = opts.allowPause !== false;
    var now = opts.now || function () { return Date.now(); };
    var setIntervalFn = opts.setInterval || root.setInterval.bind(root);
    var clearIntervalFn = opts.clearInterval || root.clearInterval.bind(root);

    var remaining = total;       // seconds remaining when last paused/started
    var endAt = null;            // timestamp (ms) the timer expires, when running
    var handle = null;
    var running = false;
    var expired = false;

    function currentRemaining() {
      if (!running || endAt === null) return remaining;
      return Math.max(0, (endAt - now()) / 1000);
    }

    function emitTick() {
      var rem = currentRemaining();
      if (typeof opts.onTick === "function") opts.onTick(rem, format(rem));
      if (rem <= 0 && !expired) {
        expired = true;
        stopInternal();
        if (typeof opts.onExpire === "function") opts.onExpire();
      }
    }

    function stopInternal() {
      running = false;
      if (handle !== null) { clearIntervalFn(handle); handle = null; }
    }

    return {
      start: function () {
        if (running || expired) return;
        running = true;
        endAt = now() + remaining * 1000;
        emitTick();
        handle = setIntervalFn(emitTick, 250);
      },
      pause: function () {
        if (!allowPause || !running) return false;
        remaining = currentRemaining();
        endAt = null;
        stopInternal();
        emitTick();
        return true;
      },
      reset: function () {
        stopInternal();
        remaining = total;
        endAt = null;
        expired = false;
        emitTick();
      },
      getRemaining: currentRemaining,
      isRunning: function () { return running; },
      isExpired: function () { return expired; },
      canPause: function () { return allowPause; },
      // Test seam: force-advance the injected clock is done by the test's `now`;
      // this lets a test poke the tick handler synchronously.
      _tick: emitTick
    };
  }

  root.LNATTimer = {
    create: createTimer,
    format: format,
    SECTION_SECONDS: SECTION_SECONDS
  };
})(typeof window !== "undefined" ? window : this);

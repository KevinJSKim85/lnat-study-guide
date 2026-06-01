#!/usr/bin/env node
/**
 * tools/bundle.js — Phase-8 single-file portable bundle
 *
 * Reads index.html, inlines every local <link rel="stylesheet"> and
 * <script src="..."> in exactly the order they appear, and writes
 * lnat-study.html at the project root.
 *
 * Run from the project root:
 *   node tools/bundle.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT    = path.resolve(__dirname, '..');
const SRC     = path.join(ROOT, 'index.html');
const DEST    = path.join(ROOT, 'lnat-study.html');

// ── helpers ──────────────────────────────────────────────────────────────────

function read(rel) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) {
    throw new Error(`Asset not found: ${abs}`);
  }
  return fs.readFileSync(abs, 'utf8');
}

// ── main ─────────────────────────────────────────────────────────────────────

let html = fs.readFileSync(SRC, 'utf8');

// 1. Inline <link rel="stylesheet" href="...">
html = html.replace(
  /<link\s[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
  (match, href) => {
    // Skip data URIs and absolute URLs (CDN/http)
    if (/^(https?:)?\/\//.test(href) || href.startsWith('data:')) return match;
    console.log(`  CSS: ${href}`);
    const css = read(href);
    return `<style>\n${css}\n</style>`;
  }
);

// Also handle href-before-rel variant
html = html.replace(
  /<link\s[^>]*href=["']([^"']+)["'][^>]*rel=["']stylesheet["'][^>]*>/gi,
  (match, href) => {
    if (/^(https?:)?\/\//.test(href) || href.startsWith('data:')) return match;
    console.log(`  CSS: ${href}`);
    const css = read(href);
    return `<style>\n${css}\n</style>`;
  }
);

// 2. Inline <script src="..."> — preserves order exactly as in index.html
html = html.replace(
  /<script\s[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi,
  (match, src) => {
    // Skip absolute URLs (CDN/http)
    if (/^(https?:)?\/\//.test(src)) return match;
    console.log(`  JS:  ${src}`);
    const js = read(src);
    return `<script>\n${js}\n</script>`;
  }
);

fs.writeFileSync(DEST, html, 'utf8');

const bytes = fs.statSync(DEST).size;
const kb    = (bytes / 1024).toFixed(1);
const mb    = (bytes / 1024 / 1024).toFixed(2);

console.log(`\nBundle written: ${DEST}`);
console.log(`Size: ${bytes.toLocaleString()} bytes (${kb} KB / ${mb} MB)`);

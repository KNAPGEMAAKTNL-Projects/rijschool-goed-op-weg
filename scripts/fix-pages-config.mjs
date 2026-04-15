/**
 * Post-build script: restructure the Astro adapter's Worker output
 * into a Cloudflare Pages-compatible layout.
 *
 * The @astrojs/cloudflare adapter outputs:
 *   dist/client/  (static HTML, CSS, JS, images)
 *   dist/server/  (Worker entry.mjs + chunks + wrangler.json)
 *
 * Pages expects:
 *   dist/         (static files + optional _worker.js in same directory)
 *
 * This script copies the server Worker code into dist/client/ as _worker.js
 * so Pages can serve both static assets and the SSR Worker from one directory.
 *
 * When adapter is disabled (fully static), this script is a no-op.
 */
import { readFileSync, writeFileSync, cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const CLIENT = 'dist/client';
const SERVER = 'dist/server';

// If no server output exists (adapter disabled, fully static), skip.
if (!existsSync(SERVER)) {
  // Check if static output exists directly in dist/
  if (existsSync('dist') && !existsSync(CLIENT)) {
    console.log('Static build detected (no adapter). No restructuring needed.');
    process.exit(0);
  }
  // If client exists but no server, also fine
  if (existsSync(CLIENT)) {
    console.log('Static build with client output. No server to restructure.');
    process.exit(0);
  }
  console.log('No build output found.');
  process.exit(0);
}

// Copy server chunks to client directory so _worker.js can import them
const chunksDir = join(CLIENT, 'chunks');
if (!existsSync(chunksDir)) mkdirSync(chunksDir, { recursive: true });
cpSync(join(SERVER, 'chunks'), chunksDir, { recursive: true });

// Copy the middleware
const middleware = join(SERVER, 'virtual_astro_middleware.mjs');
if (existsSync(middleware)) {
  cpSync(middleware, join(CLIENT, 'virtual_astro_middleware.mjs'));
}

// Create _worker.js that re-exports the server entry
const entryContent = readFileSync(join(SERVER, 'entry.mjs'), 'utf-8');
writeFileSync(join(CLIENT, '_worker.js'), entryContent);

// Replace the server wrangler.json with a minimal Pages-compatible config.
const cfgPath = join(SERVER, 'wrangler.json');
writeFileSync(cfgPath, JSON.stringify({
  name: 'rijschool-goed-op-weg',
  compatibility_date: '2026-04-15',
  pages_build_output_dir: '../client',
}));

console.log('Pages restructured: _worker.js + chunks copied to dist/client/');

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const BASE_URL = 'https://mydaily-game-education.netlify.app/';
const OUT_DIR = './public/images';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function fetchBuffer(relPath) {
  const url = BASE_URL + relPath;
  console.log(`Fetching ${url}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}

async function extractSprite(buf, x, y, w, h, isRotated, outName) {
  const outPath = path.join(OUT_DIR, outName);
  let pipeline = sharp(buf);
  if (isRotated) {
    pipeline = pipeline.extract({
      left: x,
      top: y,
      width: h, // rotated in sheet
      height: w,
    }).rotate(270);
  } else {
    pipeline = pipeline.extract({
      left: x,
      top: y,
      width: w,
      height: h,
    });
  }
  const result = await pipeline.webp({ quality: 95 }).toFile(outPath);
  console.log(`Saved ${outName}: ${result.width}x${result.height}`);
}

async function run() {
  try {
    // 1. Sheet 8: loading_bg
    const sheet8Buf = await fetchBuffer('images/shared-0-sheet8.webp');
    // loading_bg: [1, 1, 1408, 736, false]
    await extractSprite(sheet8Buf, 1, 1, 1408, 736, false, 'loading-bg.webp');

    // 2. Sheet 7: home_bg
    const sheet7Buf = await fetchBuffer('images/shared-0-sheet7.webp');
    // home_bg: [1025, 1, 1408, 736, true]
    await extractSprite(sheet7Buf, 1025, 1, 1408, 736, true, 'home-bg.webp');

    // 3. Sheet 9: buttons & loading frame
    const sheet9Buf = await fetchBuffer('images/shared-0-sheet9.webp');
    // tombol_mulai: [1231, 323, 346, 122, true]
    await extractSprite(sheet9Buf, 1231, 323, 346, 122, true, 'btn-mulai.webp');
    // tombol_mulai hover: [1107, 323, 346, 122, true]
    await extractSprite(sheet9Buf, 1107, 323, 346, 122, true, 'btn-mulai-hover.webp');
    // tombol_sound: [1921, 1537, 243, 124, true]
    await extractSprite(sheet9Buf, 1921, 1537, 243, 124, true, 'btn-sound-on.webp');
    // tombol_unmute (sound off): [897, 1537, 243, 124, true]
    await extractSprite(sheet9Buf, 897, 1537, 243, 124, true, 'btn-sound-off.webp');
    // tombol_exit: [1409, 1537, 253, 124, true]
    await extractSprite(sheet9Buf, 1409, 1537, 253, 124, true, 'btn-exit.webp');
    // bgLoading (loading frame): [434, 1, 680, 122, true]
    await extractSprite(sheet9Buf, 434, 1, 680, 122, true, 'loading-frame.webp');

    // 4. Progress bar: progressloading-sheet0.webp
    const progressBuf = await fetchBuffer('images/progressloading-sheet0.webp');
    await extractSprite(progressBuf, 0, 0, 640, 79, false, 'loading-bar.webp');

    console.log('✓ All loading & home assets successfully extracted!');
  } catch (err) {
    console.error('Extraction error:', err);
    process.exit(1);
  }
}

run();

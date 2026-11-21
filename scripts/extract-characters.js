import sharp from 'sharp';

const BASE_URL = 'https://mydaily-game-education.netlify.app/';

async function extractCharacters() {
  console.log('Fetching shared-0-sheet9.webp...');
  const res = await fetch(BASE_URL + 'images/shared-0-sheet9.webp');
  if (!res.ok) throw new Error('Failed to fetch sheet9: ' + res.statusText);
  const buf = Buffer.from(await res.arrayBuffer());

  // Male Default: [89, 1793, 124, 170, false]
  await sharp(buf)
    .extract({ left: 89, top: 1793, width: 124, height: 170 })
    .webp({ quality: 95 })
    .toFile('public/images/char-boy.webp');
  console.log('Saved char-boy.webp');

  // Male Happy: [339, 1793, 136, 182, false]
  await sharp(buf)
    .extract({ left: 339, top: 1793, width: 136, height: 182 })
    .webp({ quality: 95 })
    .toFile('public/images/char-boy-happy.webp');
  console.log('Saved char-boy-happy.webp');

  // Female Default: [831, 1793, 124, 170, false]
  await sharp(buf)
    .extract({ left: 831, top: 1793, width: 124, height: 170 })
    .webp({ quality: 95 })
    .toFile('public/images/char-girl.webp');
  console.log('Saved char-girl.webp');

  // Female Happy: [1267, 1793, 136, 182, false]
  await sharp(buf)
    .extract({ left: 1267, top: 1793, width: 136, height: 182 })
    .webp({ quality: 95 })
    .toFile('public/images/char-girl-happy.webp');
  console.log('Saved char-girl-happy.webp');

  console.log('✓ All character assets extracted successfully!');
}

extractCharacters().catch(console.error);

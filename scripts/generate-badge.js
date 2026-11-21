import sharp from 'sharp';

const svg = `
<svg width="800" height="240" viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Teal gradient for main ribbon -->
    <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4ac2ad" />
      <stop offset="50%" stop-color="#3aa895" />
      <stop offset="100%" stop-color="#2c8a79" />
    </linearGradient>

    <!-- Darker gradient for tails -->
    <linearGradient id="tailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2d8c7b" />
      <stop offset="100%" stop-color="#1e685a" />
    </linearGradient>

    <!-- Fold shadow -->
    <linearGradient id="foldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#144f44" />
      <stop offset="100%" stop-color="#247869" />
    </linearGradient>

    <!-- Text gradient (Yellow / Gold) -->
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fff59d" />
      <stop offset="25%" stop-color="#fdd835" />
      <stop offset="100%" stop-color="#f57f17" />
    </linearGradient>

    <!-- Drop shadow for the whole ribbon -->
    <filter id="ribbonShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity="0.3" />
    </filter>

    <!-- Path for text along curve -->
    <path id="textArc" d="M 120 128 Q 400 78 680 128" fill="none" />
  </defs>

  <g filter="url(#ribbonShadow)">
    <!-- LEFT TAIL -->
    <!-- Tail body -->
    <path d="M 160 120 L 40 75 L 75 140 L 45 205 L 175 160 Z" fill="url(#tailGrad)" />
    <!-- Left fold triangle (creates 3D tuck under) -->
    <path d="M 140 120 L 175 160 L 140 168 Z" fill="#144d42" />

    <!-- RIGHT TAIL -->
    <!-- Tail body -->
    <path d="M 640 120 L 760 75 L 725 140 L 755 205 L 625 160 Z" fill="url(#tailGrad)" />
    <!-- Right fold triangle -->
    <path d="M 660 120 L 625 160 L 660 168 Z" fill="#144d42" />

    <!-- MAIN ARCHED BANNER BODY -->
    <path 
      d="M 130 52 Q 400 12 670 52 L 678 162 Q 400 122 122 162 Z" 
      fill="url(#ribbonGrad)" 
      stroke="#52d1bc" 
      stroke-width="2.5"
    />
  </g>

  <!-- TEXT ALONG ARC (3D Effect) -->
  <!-- Bottom 3D shadow layer -->
  <text font-family="system-ui, -apple-system, 'Arial Rounded MT Bold', BlinkMacSystemFont, sans-serif" font-size="44" font-weight="900" fill="#165246" letter-spacing="1">
    <textPath href="#textArc" startOffset="50%" text-anchor="middle" dy="4">
      My Daily Activities
    </textPath>
  </text>

  <!-- Top Yellow Layer -->
  <text font-family="system-ui, -apple-system, 'Arial Rounded MT Bold', BlinkMacSystemFont, sans-serif" font-size="44" font-weight="900" fill="url(#textGrad)" stroke="#1a5a4d" stroke-width="2" paint-order="stroke fill" letter-spacing="1">
    <textPath href="#textArc" startOffset="50%" text-anchor="middle">
      My Daily Activities
    </textPath>
  </text>
</svg>
`;

sharp(Buffer.from(svg))
  .webp({ quality: 95 })
  .toFile('public/images/badge-my-daily.webp')
  .then(() => console.log('Successfully generated public/images/badge-my-daily.webp'));

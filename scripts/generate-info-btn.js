import sharp from 'sharp';

const svg = `
<svg width="253" height="124" viewBox="0 0 253 124" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Exact drop shadow matching btn-exit and btn-sound -->
    <filter id="btnShadow" x="-10%" y="-10%" width="125%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="3.5" flood-color="#000000" flood-opacity="0.35"/>
    </filter>

    <!-- Blue gradient matching game palette -->
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Gloss highlight -->
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.38" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04" />
    </linearGradient>
  </defs>

  <g filter="url(#btnShadow)">
    <!-- 3D bottom base (dark blue bevel) -->
    <rect x="12" y="10" width="228" height="93" rx="21" ry="21" fill="#035384" />

    <!-- Main button body with exact 5px white border -->
    <rect x="12" y="4" width="228" height="93" rx="21" ry="21" fill="url(#blueGrad)" stroke="#ffffff" stroke-width="5" />

    <!-- Subtle top gloss shine -->
    <rect x="18" y="9" width="216" height="38" rx="16" ry="16" fill="url(#shineGrad)" />

    <!-- Left Icon: SOLID FILLED white circle with cutout 'i' (FILL, not outline) -->
    <g transform="translate(58, 51)">
      <!-- Solid filled white circle -->
      <circle cx="0" cy="0" r="17" fill="#ffffff" />
      <!-- Cutout dot of i -->
      <circle cx="0" cy="-6" r="3" fill="#0284c7" />
      <!-- Cutout stem of i -->
      <rect x="-2.8" y="-1" width="5.6" height="10.5" rx="2.5" fill="#0284c7" />
    </g>

    <!-- Right Text: "Info" with crisp 3D dark shadow underneath, identical to "Keluar" and "Musik" -->
    <!-- 3D Dark Shadow Layer (dy=3.5) -->
    <text
      x="152"
      y="65.5"
      font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif"
      font-size="33"
      font-weight="900"
      fill="#03456e"
      text-anchor="middle"
      letter-spacing="0.5"
    >
      Info
    </text>

    <!-- Top White Text Layer -->
    <text
      x="152"
      y="62"
      font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif"
      font-size="33"
      font-weight="900"
      fill="#ffffff"
      text-anchor="middle"
      letter-spacing="0.5"
    >
      Info
    </text>
  </g>
</svg>
`;

sharp(Buffer.from(svg))
  .webp({ quality: 95 })
  .toFile('public/images/btn-info.webp')
  .then(() => console.log('Successfully generated pixel-matched public/images/btn-info.webp'));

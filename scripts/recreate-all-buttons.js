import sharp from 'sharp';

// 1. INFO BUTTON (Blue)
const infoSvg = `
<svg width="253" height="124" viewBox="0 0 253 124" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 50% opacity shadow as requested -->
    <filter id="btnShadow" x="-10%" y="-10%" width="125%" height="135%">
      <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
    </linearGradient>
  </defs>

  <g filter="url(#btnShadow)">
    <!-- 3D bottom bevel base -->
    <rect x="12" y="11" width="228" height="93" rx="22" ry="22" fill="#035384" />
    <!-- Main button body with 5px white stroke -->
    <rect x="12" y="5" width="228" height="93" rx="22" ry="22" fill="url(#blueGrad)" stroke="#ffffff" stroke-width="5" />
    <!-- Gloss shine -->
    <rect x="18" y="10" width="216" height="38" rx="16" ry="16" fill="url(#shineGrad)" />

    <!-- Larger solid filled icon: Info (Fill bukan outline) -->
    <g transform="translate(56, 52)">
      <circle cx="0" cy="0" r="20" fill="#ffffff" />
      <circle cx="0" cy="-6.5" r="3.3" fill="#0284c7" />
      <rect x="-3" y="-1" width="6" height="12.5" rx="3" fill="#0284c7" />
    </g>

    <!-- Larger Text: "Info" with 3D text shadow -->
    <text x="154" y="68" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#03456e" text-anchor="middle" letter-spacing="0.5">
      Info
    </text>
    <text x="154" y="64" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
      Info
    </text>
  </g>
</svg>
`;

// 2. MUSIK BUTTON (ON - Green)
const soundOnSvg = `
<svg width="253" height="124" viewBox="0 0 253 124" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="btnShadow" x="-10%" y="-10%" width="125%" height="135%">
      <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="40%" stop-color="#22c55e" />
      <stop offset="100%" stop-color="#15803d" />
    </linearGradient>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
    </linearGradient>
  </defs>

  <g filter="url(#btnShadow)">
    <!-- 3D bottom bevel base -->
    <rect x="12" y="11" width="228" height="93" rx="22" ry="22" fill="#14532d" />
    <!-- Main button body -->
    <rect x="12" y="5" width="228" height="93" rx="22" ry="22" fill="url(#greenGrad)" stroke="#ffffff" stroke-width="5" />
    <!-- Gloss shine -->
    <rect x="18" y="10" width="216" height="38" rx="16" ry="16" fill="url(#shineGrad)" />

    <!-- Solid filled white speaker icon -->
    <g transform="translate(42, 34)" fill="#ffffff">
      <!-- Speaker cone -->
      <polygon points="12,14 12,24 5,24 5,14" />
      <polygon points="12,14 24,5 24,33 12,24" />
      <!-- Sound waves (solid filled arcs) -->
      <path d="M 28 11 A 11 11 0 0 1 28 27" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M 34 5 A 18 18 0 0 1 34 33" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none" />
    </g>

    <!-- Text: "Musik" with 3D text shadow -->
    <text x="154" y="68" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#14532d" text-anchor="middle" letter-spacing="0.5">
      Musik
    </text>
    <text x="154" y="64" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
      Musik
    </text>
  </g>
</svg>
`;

// 3. MUSIK BUTTON (OFF - Muted Grey)
const soundOffSvg = `
<svg width="253" height="124" viewBox="0 0 253 124" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="btnShadow" x="-10%" y="-10%" width="125%" height="135%">
      <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <linearGradient id="greyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="40%" stop-color="#64748b" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
    </linearGradient>
  </defs>

  <g filter="url(#btnShadow)">
    <!-- 3D bottom bevel base -->
    <rect x="12" y="11" width="228" height="93" rx="22" ry="22" fill="#1e293b" />
    <!-- Main button body -->
    <rect x="12" y="5" width="228" height="93" rx="22" ry="22" fill="url(#greyGrad)" stroke="#ffffff" stroke-width="5" />
    <!-- Gloss shine -->
    <rect x="18" y="10" width="216" height="38" rx="16" ry="16" fill="url(#shineGrad)" />

    <!-- Solid filled white speaker with slash (Mute) -->
    <g transform="translate(42, 34)" fill="#ffffff">
      <polygon points="12,14 12,24 5,24 5,14" />
      <polygon points="12,14 24,5 24,33 12,24" />
      <!-- Mute 'X' or slash -->
      <line x1="28" y1="12" x2="38" y2="26" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
      <line x1="38" y1="12" x2="28" y2="26" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
    </g>

    <!-- Text: "Musik" with 3D text shadow -->
    <text x="154" y="68" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#1e293b" text-anchor="middle" letter-spacing="0.5">
      Musik
    </text>
    <text x="154" y="64" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
      Musik
    </text>
  </g>
</svg>
`;

// 4. KELUAR BUTTON (Red/Coral)
const exitSvg = `
<svg width="253" height="124" viewBox="0 0 253 124" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="btnShadow" x="-10%" y="-10%" width="125%" height="135%">
      <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="40%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#dc2626" />
    </linearGradient>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
    </linearGradient>
  </defs>

  <g filter="url(#btnShadow)">
    <!-- 3D bottom bevel base -->
    <rect x="12" y="11" width="228" height="93" rx="22" ry="22" fill="#991b1b" />
    <!-- Main button body -->
    <rect x="12" y="5" width="228" height="93" rx="22" ry="22" fill="url(#redGrad)" stroke="#ffffff" stroke-width="5" />
    <!-- Gloss shine -->
    <rect x="18" y="10" width="216" height="38" rx="16" ry="16" fill="url(#shineGrad)" />

    <!-- Solid filled white door exit icon -->
    <g transform="translate(43, 34)" fill="#ffffff">
      <!-- Door bracket -->
      <path d="M 12 6 L 5 6 L 5 32 L 12 32" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <!-- Arrow pointing right (solid fill) -->
      <polygon points="12,19 25,19 25,14 34,20 25,26 25,21 12,21" fill="#ffffff" />
    </g>

    <!-- Text: "Keluar" with 3D text shadow -->
    <text x="154" y="68" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#7f1d1d" text-anchor="middle" letter-spacing="0.5">
      Keluar
    </text>
    <text x="154" y="64" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="38" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
      Keluar
    </text>
  </g>
</svg>
`;

// 5. MULAI SEKARANG BUTTON (Yellow/Gold)
const mulaiSvg = `
<svg width="360" height="130" viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="mulaiShadow" x="-10%" y="-10%" width="125%" height="135%">
      <feDropShadow dx="0" dy="7" stdDeviation="4.5" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fde047" />
      <stop offset="35%" stop-color="#facc15" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.06" />
    </linearGradient>
  </defs>

  <g filter="url(#mulaiShadow)">
    <!-- 3D bottom bevel base -->
    <rect x="12" y="14" width="336" height="98" rx="24" ry="24" fill="#78350f" />
    <!-- Main button body with 5.5px white stroke -->
    <rect x="12" y="6" width="336" height="98" rx="24" ry="24" fill="url(#goldGrad)" stroke="#ffffff" stroke-width="5.5" />
    <!-- Gloss shine -->
    <rect x="20" y="12" width="320" height="42" rx="18" ry="18" fill="url(#shineGrad)" />

    <!-- Text: "MULAI SEKARANG" with 3D text shadow -->
    <text x="180" y="72" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="36" font-weight="900" fill="#78350f" text-anchor="middle" letter-spacing="1">
      MULAI SEKARANG
    </text>
    <text x="180" y="67" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="36" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">
      MULAI SEKARANG
    </text>
  </g>
</svg>
`;

// 6. MULAI SEKARANG HOVER BUTTON (Brighter Gold)
const mulaiHoverSvg = `
<svg width="360" height="130" viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="mulaiShadow" x="-10%" y="-10%" width="125%" height="135%">
      <feDropShadow dx="0" dy="7" stdDeviation="4.5" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <linearGradient id="goldHoverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="35%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#eab308" />
    </linearGradient>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.65" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.1" />
    </linearGradient>
  </defs>

  <g filter="url(#mulaiShadow)">
    <rect x="12" y="14" width="336" height="98" rx="24" ry="24" fill="#78350f" />
    <rect x="12" y="6" width="336" height="98" rx="24" ry="24" fill="url(#goldHoverGrad)" stroke="#ffffff" stroke-width="5.5" />
    <rect x="20" y="12" width="320" height="42" rx="18" ry="18" fill="url(#shineGrad)" />

    <text x="180" y="72" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="36" font-weight="900" fill="#78350f" text-anchor="middle" letter-spacing="1">
      MULAI SEKARANG
    </text>
    <text x="180" y="67" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Arial Rounded MT Bold', sans-serif" font-size="36" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">
      MULAI SEKARANG
    </text>
  </g>
</svg>
`;

async function run() {
  await sharp(Buffer.from(infoSvg)).webp({ quality: 95 }).toFile('public/images/btn-info.webp');
  console.log('Saved btn-info.webp');

  await sharp(Buffer.from(soundOnSvg)).webp({ quality: 95 }).toFile('public/images/btn-sound-on.webp');
  console.log('Saved btn-sound-on.webp');

  await sharp(Buffer.from(soundOffSvg)).webp({ quality: 95 }).toFile('public/images/btn-sound-off.webp');
  console.log('Saved btn-sound-off.webp');

  await sharp(Buffer.from(exitSvg)).webp({ quality: 95 }).toFile('public/images/btn-exit.webp');
  console.log('Saved btn-exit.webp');

  await sharp(Buffer.from(mulaiSvg)).webp({ quality: 95 }).toFile('public/images/btn-mulai.webp');
  console.log('Saved btn-mulai.webp');

  await sharp(Buffer.from(mulaiHoverSvg)).webp({ quality: 95 }).toFile('public/images/btn-mulai-hover.webp');
  console.log('Saved btn-mulai-hover.webp');

  console.log('✓ All buttons successfully recreated with unified style and 50% opacity shadow!');
}

run();

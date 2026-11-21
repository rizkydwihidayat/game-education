import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS = {
  // 1. BANGUN PAGI
  'menu-bangun-pagi.webp': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bae6fd" />
          <stop offset="100%" stop-color="#fef08a" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#facc15" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="sunBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="40%" stop-color="#facc15" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
        <linearGradient id="clockRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fb7185" />
          <stop offset="40%" stop-color="#f43f5e" />
          <stop offset="100%" stop-color="#be123c" />
        </linearGradient>
        <linearGradient id="bellGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="60%" stop-color="#eab308" />
          <stop offset="100%" stop-color="#ca8a04" />
        </linearGradient>
      </defs>

      <!-- Circular Soft Sun Background -->
      <circle cx="120" cy="120" r="104" fill="url(#skyGrad)" stroke="#fde047" stroke-width="4" />
      <circle cx="120" cy="85" r="70" fill="url(#sunGlow)" />

      <!-- Rising Sun Behind Clock -->
      <g transform="translate(120, 95)">
        <!-- Sunbeams -->
        <path d="M 0 -68 L 0 -52 M 45 -45 L 35 -35 M 68 0 L 52 0 M 45 45 L 35 35 M -45 -45 L -35 -35 M -68 0 L -52 0" stroke="#f59e0b" stroke-width="5" stroke-linecap="round" />
        <!-- Sun Circle -->
        <circle cx="0" cy="0" r="42" fill="url(#sunBody)" stroke="#d97706" stroke-width="3" />
        <!-- Cute Smiling Sun Face -->
        <circle cx="-12" cy="-4" r="4" fill="#78350f" />
        <circle cx="12" cy="-4" r="4" fill="#78350f" />
        <ellipse cx="-16" cy="2" rx="4" ry="2" fill="#f43f5e" opacity="0.6" />
        <ellipse cx="16" cy="2" rx="4" ry="2" fill="#f43f5e" opacity="0.6" />
        <path d="M -9 4 Q 0 14 9 4" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
      </g>

      <!-- Cute 3D Alarm Clock in Foreground -->
      <g transform="translate(120, 150)">
        <!-- Clock Bell Stand / Feet -->
        <rect x="-42" y="38" width="10" height="18" rx="5" fill="#9ca3af" transform="rotate(25 -37 47)" />
        <rect x="32" y="38" width="10" height="18" rx="5" fill="#9ca3af" transform="rotate(-25 37 47)" />
        
        <!-- Twin Bells on Top -->
        <path d="M -48 -32 C -58 -18, -38 -8, -30 -18 Z" fill="url(#bellGold)" stroke="#a16207" stroke-width="2.5" />
        <path d="M 48 -32 C 58 -18, 38 -8, 30 -18 Z" fill="url(#bellGold)" stroke="#a16207" stroke-width="2.5" />
        <rect x="-5" y="-48" width="10" height="12" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
        <circle cx="0" cy="-46" r="4" fill="#94a3b8" />

        <!-- Sound wave ringing vibes -->
        <path d="M -60 -36 C -68 -26, -68 -10, -60 0" stroke="#f59e0b" stroke-width="3.5" fill="none" stroke-linecap="round" />
        <path d="M 60 -36 C 68 -26, 68 -10, 60 0" stroke="#f59e0b" stroke-width="3.5" fill="none" stroke-linecap="round" />

        <!-- Clock Outer Body -->
        <circle cx="0" cy="0" r="46" fill="url(#clockRed)" stroke="#9f1239" stroke-width="4" />
        <circle cx="0" cy="2" r="44" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.6" />

        <!-- Clock Inner White Dial -->
        <circle cx="0" cy="0" r="34" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />

        <!-- Clock Hour Ticks -->
        <circle cx="0" cy="-26" r="2" fill="#334155" />
        <circle cx="26" cy="0" r="2" fill="#334155" />
        <circle cx="0" cy="26" r="2" fill="#334155" />
        <circle cx="-26" cy="0" r="2" fill="#334155" />

        <!-- Clock Hands pointing to 06:00 (Wake up time!) -->
        <line x1="0" y1="0" x2="0" y2="18" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        <line x1="0" y1="0" x2="0" y2="-20" stroke="#e11d48" stroke-width="3" stroke-linecap="round" />
        <circle cx="0" cy="0" r="4" fill="#0f172a" />
      </g>

      <!-- Sparkles -->
      <polygon points="40,55 43,65 53,68 43,71 40,81 37,71 27,68 37,65" fill="#facc15" />
      <polygon points="195,65 198,73 206,75 198,77 195,85 192,77 184,75 192,73" fill="#facc15" />
    </svg>
  `,

  // 2. BERIBADAH
  'menu-beribadah.webp': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
      <defs>
        <linearGradient id="ibadahBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ccfbf1" />
          <stop offset="100%" stop-color="#99f6e4" />
        </linearGradient>
        <linearGradient id="domeGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="50%" stop-color="#eab308" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <linearGradient id="matTeal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#14b8a6" />
          <stop offset="100%" stop-color="#0f766e" />
        </linearGradient>
        <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffedd5" />
          <stop offset="100%" stop-color="#fed7aa" />
        </linearGradient>
      </defs>

      <!-- Circle Background -->
      <circle cx="120" cy="120" r="104" fill="url(#ibadahBg)" stroke="#2dd4bf" stroke-width="4" />

      <!-- Glowing Dome Silhouette in background -->
      <g transform="translate(120, 95)" opacity="0.35">
        <path d="M 0 -65 C -45 -35, -55 20, -55 35 L 55 35 C 55 20, 45 -35, 0 -65 Z" fill="#0d9488" />
        <rect x="-8" y="-85" width="16" height="22" rx="3" fill="#0d9488" />
        <circle cx="0" cy="-88" r="7" fill="#0d9488" />
      </g>

      <!-- Prayer Mat (Sajadah) Motif -->
      <g transform="translate(120, 160)">
        <path d="M -60 -25 L 60 -25 L 75 35 L -75 35 Z" fill="url(#matTeal)" stroke="#042f2e" stroke-width="3" />
        <!-- Mat Border & Arch -->
        <path d="M -45 -18 L 45 -18 L 56 26 L -56 26 Z" fill="#0d9488" stroke="#fde047" stroke-width="2" />
        <path d="M -30 20 L -30 0 C -30 -14, 0 -24, 0 -24 C 0 -24, 30 -14, 30 0 L 30 20 Z" fill="#042f2e" opacity="0.3" />
        <!-- Fringe Tassels -->
        <line x1="-70" y1="35" x2="-70" y2="44" stroke="#facc15" stroke-width="3" />
        <line x1="-50" y1="35" x2="-50" y2="44" stroke="#facc15" stroke-width="3" />
        <line x1="-30" y1="35" x2="-30" y2="44" stroke="#facc15" stroke-width="3" />
        <line x1="-10" y1="35" x2="-10" y2="44" stroke="#facc15" stroke-width="3" />
        <line x1="10" y1="35" x2="10" y2="44" stroke="#facc15" stroke-width="3" />
        <line x1="30" y1="35" x2="30" y2="44" stroke="#facc15" stroke-width="3" />
        <line x1="50" y1="35" x2="50" y2="44" stroke="#facc15" stroke-width="3" />
        <line x1="70" y1="35" x2="70" y2="44" stroke="#facc15" stroke-width="3" />
      </g>

      <!-- Cupped Praying Hands (Tangan Berdoa) -->
      <g transform="translate(120, 110)">
        <!-- Left Hand -->
        <path d="M -2 -25 C -8 -28, -18 -22, -22 -8 C -26 5, -28 20, -18 32 C -12 38, -2 40, -2 40 Z" fill="url(#skinTone)" stroke="#c2410c" stroke-width="3" />
        <!-- Left Thumb -->
        <path d="M -2 -2 C -10 2, -12 12, -8 18 C -4 20, -2 18, -2 18 Z" fill="url(#skinTone)" stroke="#c2410c" stroke-width="2.5" />

        <!-- Right Hand (Mirrored) -->
        <path d="M 2 -25 C 8 -28, 18 -22, 22 -8 C 26 5, 28 20, 18 32 C 12 38, 2 40, 2 40 Z" fill="url(#skinTone)" stroke="#c2410c" stroke-width="3" />
        <!-- Right Thumb -->
        <path d="M 2 -2 C 10 2, 12 12, 8 18 C 4 20, 2 18, 2 18 Z" fill="url(#skinTone)" stroke="#c2410c" stroke-width="2.5" />

        <!-- Sleeve Cuffs -->
        <path d="M -24 30 L -4 35 L -10 50 L -30 45 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2.5" />
        <path d="M 24 30 L 4 35 L 10 50 L 30 45 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2.5" />
      </g>

      <!-- Golden Crescent Moon & Star at top -->
      <g transform="translate(120, 48)">
        <path d="M 0 -22 C -16 -22, -28 -10, -28 6 C -28 22, -16 34, 0 34 C -10 26, -14 16, -14 6 C -14 -4, -10 -14, 0 -22 Z" fill="url(#domeGold)" stroke="#92400e" stroke-width="2" />
        <polygon points="12,2 15,10 23,12 15,15 12,22 9,15 2,12 9,10" fill="#facc15" stroke="#b45309" stroke-width="1.5" />
      </g>

      <!-- Divine light sparkles -->
      <polygon points="45,95 48,103 56,105 48,107 45,115 42,107 34,105 42,103" fill="#facc15" />
      <polygon points="195,95 198,103 206,105 198,107 195,115 192,107 184,105 192,103" fill="#facc15" />
    </svg>
  `,

  // 3. BEROLAHRAGA
  'menu-berolahraga.webp': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
      <defs>
        <linearGradient id="sportBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffedd5" />
          <stop offset="100%" stop-color="#fed7aa" />
        </linearGradient>
        <linearGradient id="ballShade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="70%" stop-color="#f1f5f9" />
          <stop offset="100%" stop-color="#cbd5e1" />
        </linearGradient>
        <linearGradient id="coneOrange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fb923c" />
          <stop offset="50%" stop-color="#f97316" />
          <stop offset="100%" stop-color="#c2410c" />
        </linearGradient>
        <linearGradient id="medalGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="50%" stop-color="#eab308" />
          <stop offset="100%" stop-color="#a16207" />
        </linearGradient>
      </defs>

      <!-- Background Circle -->
      <circle cx="120" cy="120" r="104" fill="url(#sportBg)" stroke="#fb923c" stroke-width="4" />

      <!-- Speed & Energy Lines -->
      <path d="M 30 110 C 60 70, 110 50, 160 55" stroke="#f97316" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="10 8" opacity="0.6" />
      <path d="M 40 135 C 70 95, 120 75, 180 80" stroke="#f97316" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="8 6" opacity="0.4" />

      <!-- Sports Whistle & Ribbon on Left -->
      <g transform="translate(60, 80) rotate(-20)">
        <!-- Ribbon -->
        <path d="M -15 -35 L 5 10 L -5 10 L -25 -35 Z" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <path d="M 5 -35 L -15 10 L -5 10 L 15 -35 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5" />
        <!-- Whistle Body -->
        <circle cx="0" cy="15" r="14" fill="url(#medalGold)" stroke="#78350f" stroke-width="2.5" />
        <rect x="0" y="8" width="22" height="12" rx="3" fill="url(#medalGold)" stroke="#78350f" stroke-width="2.5" />
        <circle cx="-2" cy="15" r="4" fill="#78350f" />
      </g>

      <!-- Large 3D Classic Soccer Ball Center -->
      <g transform="translate(125, 130)">
        <!-- Ball Shadow -->
        <ellipse cx="0" cy="50" rx="46" ry="14" fill="#000000" opacity="0.25" />
        
        <!-- Main Ball Sphere -->
        <circle cx="0" cy="0" r="48" fill="url(#ballShade)" stroke="#334155" stroke-width="4" />

        <!-- Pentagon Center -->
        <polygon points="0,-16 15,-5 9,13 -9,13 -15,-5" fill="#1e293b" />

        <!-- Radiating Seams -->
        <line x1="0" y1="-16" x2="0" y2="-36" stroke="#334155" stroke-width="3.5" />
        <line x1="15" y1="-5" x2="36" y2="-12" stroke="#334155" stroke-width="3.5" />
        <line x1="9" y1="13" x2="28" y2="30" stroke="#334155" stroke-width="3.5" />
        <line x1="-9" y1="13" x2="-28" y2="30" stroke="#334155" stroke-width="3.5" />
        <line x1="-15" y1="-5" x2="-36" y2="-12" stroke="#334155" stroke-width="3.5" />

        <!-- Outer Edge Patches -->
        <polygon points="-12,-46 0,-36 12,-46" fill="#1e293b" />
        <polygon points="36,-12 47,-2 46,-24" fill="#1e293b" />
        <polygon points="28,30 42,32 37,16" fill="#1e293b" />
        <polygon points="-28,30 -42,32 -37,16" fill="#1e293b" />
        <polygon points="-36,-12 -47,-2 -46,-24" fill="#1e293b" />

        <!-- Specular Highlight -->
        <ellipse cx="-16" cy="-20" rx="10" ry="6" fill="#ffffff" opacity="0.8" transform="rotate(-30 -16 -20)" />
      </g>

      <!-- Sports Sneaker / Shoe Accent on right -->
      <g transform="translate(180, 165) rotate(15)">
        <path d="M -22 15 C -22 15, -15 -10, 0 -12 C 15 -14, 25 2, 32 8 C 36 12, 36 18, 28 20 C 10 22, -15 22, -22 15 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3" />
        <!-- White Sole -->
        <path d="M -24 16 L 30 18 L 28 24 L -24 24 Z" fill="#ffffff" stroke="#1e3a8a" stroke-width="2" />
        <!-- Laces -->
        <line x1="-4" y1="-5" x2="8" y2="-3" stroke="#ffffff" stroke-width="2.5" />
        <line x1="-2" y1="3" x2="10" y2="5" stroke="#ffffff" stroke-width="2.5" />
      </g>

      <!-- Energy Stars -->
      <polygon points="180,60 183,68 192,70 184,72 181,80 178,72 170,70 178,68" fill="#f59e0b" />
      <polygon points="50,165 52,170 58,172 53,174 51,180 49,174 44,172 49,170" fill="#f59e0b" />
    </svg>
  `,

  // 4. MAKAN SEHAT DAN BERGIZI
  'menu-makan-sehat.webp': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
      <defs>
        <linearGradient id="foodBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffe4e6" />
          <stop offset="100%" stop-color="#fecdd3" />
        </linearGradient>
        <linearGradient id="appleRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fb7185" />
          <stop offset="40%" stop-color="#e11d48" />
          <stop offset="100%" stop-color="#9f1239" />
        </linearGradient>
        <linearGradient id="plateWhite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="70%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
        <linearGradient id="carrotOrange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fb923c" />
          <stop offset="60%" stop-color="#f97316" />
          <stop offset="100%" stop-color="#ea580c" />
        </linearGradient>
        <linearGradient id="milkBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bae6fd" />
          <stop offset="100%" stop-color="#7dd3fc" />
        </linearGradient>
      </defs>

      <!-- Background Circle -->
      <circle cx="120" cy="120" r="104" fill="url(#foodBg)" stroke="#fb7185" stroke-width="4" />

      <!-- Big Dining Plate -->
      <g transform="translate(120, 140)">
        <ellipse cx="0" cy="18" rx="84" ry="32" fill="#000000" opacity="0.18" />
        <ellipse cx="0" cy="0" rx="82" ry="38" fill="url(#plateWhite)" stroke="#cbd5e1" stroke-width="4" />
        <ellipse cx="0" cy="0" rx="66" ry="28" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2" />

        <!-- Crisp Green Broccoli on Left -->
        <g transform="translate(-32, -15)">
          <!-- Stem -->
          <path d="M -4 10 L 4 10 L 2 24 L -2 24 Z" fill="#a3e635" stroke="#4d7c0f" stroke-width="2" />
          <!-- Florets -->
          <circle cx="-10" cy="4" r="10" fill="#22c55e" stroke="#15803d" stroke-width="2.5" />
          <circle cx="10" cy="4" r="10" fill="#22c55e" stroke="#15803d" stroke-width="2.5" />
          <circle cx="0" cy="-6" r="12" fill="#4ade80" stroke="#15803d" stroke-width="2.5" />
        </g>

        <!-- Fresh Crunchy Carrot Center -->
        <g transform="translate(8, -12) rotate(35)">
          <!-- Carrot Leaf Greens -->
          <path d="M 0 -22 C -6 -32, -12 -34, -14 -40 M 0 -22 C 0 -34, 4 -36, 6 -42 M 0 -22 C 6 -32, 12 -34, 16 -38" stroke="#16a34a" stroke-width="3" stroke-linecap="round" fill="none" />
          <!-- Carrot Body -->
          <path d="M -8 -20 C 8 -20, 10 -15, 4 18 C 2 26, -2 26, -4 18 C -10 -15, -8 -20, -8 -20 Z" fill="url(#carrotOrange)" stroke="#9a3412" stroke-width="2.5" />
          <!-- Grooves -->
          <line x1="-4" y1="-8" x2="2" y2="-8" stroke="#c2410c" stroke-width="2" stroke-linecap="round" />
          <line x1="-2" y1="2" x2="4" y2="2" stroke="#c2410c" stroke-width="2" stroke-linecap="round" />
        </g>

        <!-- Healthy Egg / Protein Sunny Side Up on right -->
        <g transform="translate(32, 2)">
          <ellipse cx="0" cy="0" rx="16" ry="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <circle cx="-1" cy="-1" r="7" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
          <circle cx="-3" cy="-3" r="2" fill="#ffffff" />
        </g>
      </g>

      <!-- Glossy Red Apple Top-Left -->
      <g transform="translate(65, 75)">
        <!-- Shadow -->
        <ellipse cx="0" cy="30" rx="22" ry="7" fill="#000000" opacity="0.2" />
        <!-- Leaf & Stem -->
        <path d="M 0 -24 C 2 -32, 8 -36, 12 -38" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 4 -30 C 14 -38, 24 -32, 24 -24 C 14 -22, 6 -24, 4 -30 Z" fill="#22c55e" stroke="#15803d" stroke-width="2" />
        <!-- Apple Body -->
        <path d="M -22 -14 C -22 -28, 0 -20, 0 -12 C 0 -20, 22 -28, 22 -14 C 22 10, 14 26, 0 28 C -14 26, -22 10, -22 -14 Z" fill="url(#appleRed)" stroke="#881337" stroke-width="3" />
        <!-- Specular Highlight -->
        <ellipse cx="-8" cy="-8" rx="5" ry="8" fill="#ffffff" opacity="0.7" transform="rotate(-25 -8 -8)" />
      </g>

      <!-- Glass of Fresh Milk Top-Right -->
      <g transform="translate(170, 75)">
        <!-- Straw -->
        <path d="M 2 -40 L 14 -60 L 22 -58" stroke="#ef4444" stroke-width="4" stroke-linecap="round" fill="none" />
        <!-- Glass Body -->
        <path d="M -16 -35 L 16 -35 L 12 25 L -12 25 Z" fill="url(#milkBlue)" stroke="#0284c7" stroke-width="2.5" opacity="0.6" />
        <!-- Milk Content -->
        <path d="M -14 -15 L 14 -15 L 11 23 L -11 23 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
        <ellipse cx="0" cy="-15" rx="14" ry="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
        <!-- Milk Label -->
        <rect x="-8" y="-4" width="16" height="12" rx="2" fill="#38bdf8" />
        <path d="M -4 2 L 4 2" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
      </g>
    </svg>
  `,

  // 5. GEMAR BELAJAR
  'menu-gemar-belajar.webp': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
      <defs>
        <linearGradient id="studyBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e0f2fe" />
          <stop offset="100%" stop-color="#bae6fd" />
        </linearGradient>
        <linearGradient id="bulbGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="50%" stop-color="#facc15" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
        <linearGradient id="pencilYellow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
      </defs>

      <!-- Background Circle -->
      <circle cx="120" cy="120" r="104" fill="url(#studyBg)" stroke="#38bdf8" stroke-width="4" />

      <!-- Glowing Lightbulb Idea at Top -->
      <g transform="translate(120, 52)">
        <!-- Glow rays -->
        <line x1="0" y1="-28" x2="0" y2="-36" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" />
        <line x1="22" y1="-22" x2="28" y2="-28" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" />
        <line x1="-22" y1="-22" x2="-28" y2="-28" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" />
        
        <!-- Bulb Glass -->
        <path d="M -16 -8 C -24 -24, 24 -24, 16 -8 C 12 -2, 10 4, 8 10 L -8 10 C -10 4, -12 -2, -16 -8 Z" fill="url(#bulbGold)" stroke="#b45309" stroke-width="2.5" />
        <rect x="-8" y="10" width="16" height="5" rx="1.5" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
        <rect x="-6" y="15" width="12" height="4" rx="1" fill="#64748b" />
        <!-- Filament -->
        <path d="M -5 -6 Q 0 -14 5 -6" stroke="#d97706" stroke-width="2" fill="none" />
      </g>

      <!-- Stack of Books & Open Book in Foreground -->
      <g transform="translate(120, 150)">
        <!-- Bottom Blue Hardcover Book -->
        <path d="M -60 25 L 60 25 L 55 45 L -65 45 Z" fill="#2563eb" stroke="#1e3a8a" stroke-width="3" />
        <path d="M -65 45 L 55 45 L 50 50 L -70 50 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2.5" />
        <rect x="-56" y="29" width="108" height="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />

        <!-- Middle Red Book -->
        <path d="M -52 10 L 52 10 L 48 26 L -56 26 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
        <rect x="-48" y="14" width="94" height="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />

        <!-- Top Open Book -->
        <g transform="translate(0, -6)">
          <!-- Left Open Page -->
          <path d="M 0 -22 C -20 -28, -50 -20, -56 -10 L -54 18 C -48 10, -20 6, 0 12 Z" fill="#ffffff" stroke="#334155" stroke-width="3" />
          <path d="M 0 -20 C -20 -26, -48 -18, -54 -8 L -52 16 C -46 8, -20 4, 0 10 Z" fill="#f8fafc" />
          <!-- Page text lines -->
          <line x1="-44" y1="-4" x2="-10" y2="-2" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
          <line x1="-44" y1="3" x2="-14" y2="4" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
          <line x1="-44" y1="10" x2="-20" y2="10" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />

          <!-- Right Open Page -->
          <path d="M 0 -22 C 20 -28, 50 -20, 56 -10 L 54 18 C 48 10, 20 6, 0 12 Z" fill="#ffffff" stroke="#334155" stroke-width="3" />
          <path d="M 0 -20 C 20 -26, 48 -18, 54 -8 L 52 16 C 46 8, 20 4, 0 10 Z" fill="#f8fafc" />
          <!-- Page text lines -->
          <line x1="10" y1="-2" x2="44" y2="-4" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
          <line x1="14" y1="4" x2="44" y2="3" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
          <line x1="20" y1="10" x2="44" y2="10" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />

          <!-- Center Spine -->
          <line x1="0" y1="-24" x2="0" y2="14" stroke="#475569" stroke-width="3" />
        </g>
      </g>

      <!-- Study Pencil on Angle -->
      <g transform="translate(170, 115) rotate(40)">
        <!-- Eraser -->
        <rect x="-6" y="-36" width="12" height="10" rx="3" fill="#f43f5e" stroke="#9f1239" stroke-width="2" />
        <rect x="-6" y="-26" width="12" height="4" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5" />
        <!-- Pencil Body -->
        <rect x="-6" y="-22" width="12" height="42" fill="url(#pencilYellow)" stroke="#b45309" stroke-width="2" />
        <!-- Tip -->
        <polygon points="-6,20 6,20 0,34" fill="#fed7aa" stroke="#b45309" stroke-width="2" />
        <polygon points="-2,29 2,29 0,34" fill="#1e293b" />
      </g>

      <!-- Sparkles -->
      <polygon points="45,90 48,98 56,100 48,102 45,110 42,102 34,100 42,98" fill="#facc15" />
    </svg>
  `,

  // 6. BERMASYARAKAT
  'menu-bermasyarakat.webp': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
      <defs>
        <linearGradient id="commBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f3e8ff" />
          <stop offset="100%" stop-color="#e9d5ff" />
        </linearGradient>
        <linearGradient id="heartPink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f472b6" />
          <stop offset="50%" stop-color="#ec4899" />
          <stop offset="100%" stop-color="#be185d" />
        </linearGradient>
        <linearGradient id="boyShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>
        <linearGradient id="girlShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f472b6" />
          <stop offset="100%" stop-color="#db2777" />
        </linearGradient>
      </defs>

      <!-- Background Circle -->
      <circle cx="120" cy="120" r="104" fill="url(#commBg)" stroke="#c084fc" stroke-width="4" />

      <!-- Big Friendly Love Heart in Background -->
      <g transform="translate(120, 85)">
        <path d="M 0 35 C -35 10, -55 -15, -35 -35 C -18 -45, 0 -22, 0 -12 C 0 -22, 18 -45, 35 -35 C 55 -15, 35 10, 0 35 Z" fill="url(#heartPink)" stroke="#9d174d" stroke-width="3" opacity="0.85" />
      </g>

      <!-- Two Happy Friends Standing Together & Waving -->
      <!-- Boy on Left -->
      <g transform="translate(82, 140)">
        <!-- Boy Body / Shirt -->
        <path d="M -18 10 C -18 0, 18 0, 18 10 L 14 36 L -14 36 Z" fill="url(#boyShirt)" stroke="#0369a1" stroke-width="3" />
        <!-- Boy Pants -->
        <path d="M -14 36 L -14 55 L -3 55 L -1 42 L 1 42 L 3 55 L 14 55 L 14 36 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2.5" />
        <!-- Head -->
        <circle cx="0" cy="-14" r="18" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5" />
        <!-- Hair -->
        <path d="M -18 -18 C -18 -32, 16 -34, 18 -18 C 12 -22, -10 -22, -18 -18 Z" fill="#854d0e" stroke="#451a03" stroke-width="2.5" />
        <!-- Happy Face -->
        <circle cx="-5" cy="-14" r="2.5" fill="#1e293b" />
        <circle cx="7" cy="-14" r="2.5" fill="#1e293b" />
        <path d="M -3 -8 Q 1 -4 5 -8" stroke="#7c2d12" stroke-width="2" fill="none" stroke-linecap="round" />
        <!-- Left Arm Waving -->
        <path d="M -16 6 C -28 0, -32 -14, -30 -22" stroke="#fed7aa" stroke-width="6" stroke-linecap="round" fill="none" />
        <path d="M -16 6 C -28 0, -32 -14, -30 -22" stroke="#c2410c" stroke-width="1.5" stroke-linecap="round" fill="none" />
      </g>

      <!-- Girl on Right -->
      <g transform="translate(158, 140)">
        <!-- Girl Dress -->
        <path d="M -16 10 C -16 0, 16 0, 16 10 L 22 42 L -22 42 Z" fill="url(#girlShirt)" stroke="#9d174d" stroke-width="3" />
        <!-- Legs -->
        <line x1="-8" y1="42" x2="-8" y2="55" stroke="#fed7aa" stroke-width="5" stroke-linecap="round" />
        <line x1="8" y1="42" x2="8" y2="55" stroke="#fed7aa" stroke-width="5" stroke-linecap="round" />
        <!-- Head -->
        <circle cx="0" cy="-14" r="18" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5" />
        <!-- Pigtails Hair -->
        <path d="M -18 -18 C -18 -34, 18 -34, 18 -18 C 12 -22, -12 -22, -18 -18 Z" fill="#f43f5e" stroke="#881337" stroke-width="2.5" />
        <!-- Side Pigtails -->
        <circle cx="-20" cy="-10" r="7" fill="#f43f5e" stroke="#881337" stroke-width="2" />
        <circle cx="20" cy="-10" r="7" fill="#f43f5e" stroke="#881337" stroke-width="2" />
        <!-- Happy Face -->
        <circle cx="-6" cy="-14" r="2.5" fill="#1e293b" />
        <circle cx="6" cy="-14" r="2.5" fill="#1e293b" />
        <path d="M -4 -8 Q 0 -4 4 -8" stroke="#7c2d12" stroke-width="2" fill="none" stroke-linecap="round" />
        <!-- Right Arm Waving -->
        <path d="M 16 6 C 28 0, 32 -14, 30 -22" stroke="#fed7aa" stroke-width="6" stroke-linecap="round" fill="none" />
        <path d="M 16 6 C 28 0, 32 -14, 30 -22" stroke="#c2410c" stroke-width="1.5" stroke-linecap="round" fill="none" />
      </g>

      <!-- Center Joined Hands Holding -->
      <g transform="translate(120, 150)">
        <ellipse cx="0" cy="0" rx="9" ry="7" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5" />
      </g>

      <!-- Celebration Stars -->
      <polygon points="50,55 53,63 61,65 53,67 50,75 47,67 39,65 47,63" fill="#facc15" />
      <polygon points="190,55 193,63 201,65 193,67 190,75 187,67 179,65 187,63" fill="#facc15" />
    </svg>
  `,

  // 7. TIDUR CEPAT
  'menu-tidur-cepat.webp': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
      <defs>
        <linearGradient id="nightBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1b4b" />
          <stop offset="50%" stop-color="#312e81" />
          <stop offset="100%" stop-color="#4338ca" />
        </linearGradient>
        <linearGradient id="moonGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="50%" stop-color="#facc15" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
        <linearGradient id="capBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#60a5fa" />
          <stop offset="100%" stop-color="#2563eb" />
        </linearGradient>
        <linearGradient id="cloudWhite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#cbd5e1" />
        </linearGradient>
      </defs>

      <!-- Background Circle Night Sky -->
      <circle cx="120" cy="120" r="104" fill="url(#nightBg)" stroke="#818cf8" stroke-width="4" />

      <!-- Fluffy Night Clouds at bottom -->
      <g transform="translate(120, 180)" opacity="0.45">
        <circle cx="-50" cy="0" r="30" fill="url(#cloudWhite)" />
        <circle cx="0" cy="-10" r="36" fill="url(#cloudWhite)" />
        <circle cx="50" cy="0" r="30" fill="url(#cloudWhite)" />
      </g>

      <!-- Sleeping Crescent Moon with Cute Nightcap -->
      <g transform="translate(115, 110)">
        <!-- Crescent Moon Body -->
        <path d="M 12 -54 C -35 -48, -62 0, -32 46 C 4 92, 65 52, 60 12 C 32 34, -5 22, -14 -8 C -22 -32, 2 -48, 12 -54 Z" fill="url(#moonGold)" stroke="#b45309" stroke-width="3.5" />

        <!-- Cute Sleeping Face on Moon -->
        <!-- Sleeping Closed Eye -->
        <path d="M -18 4 Q -12 12 -6 4" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Rosy Cheek -->
        <ellipse cx="-12" cy="15" rx="6" ry="3.5" fill="#f43f5e" opacity="0.6" />

        <!-- Cute Nightcap Hat on Moon's Top Tip -->
        <g transform="translate(6, -50) rotate(-18)">
          <!-- Striped Sleeping Cap -->
          <path d="M -14 0 C 14 0, 12 -8, 2 -32 C -8 -20, -14 -10, -14 0 Z" fill="url(#capBlue)" stroke="#1e3a8a" stroke-width="2.5" />
          <path d="M -10 -10 L 8 -13" stroke="#ffffff" stroke-width="3" />
          <path d="M -6 -20 L 4 -22" stroke="#ffffff" stroke-width="3" />
          <!-- White Fluffy Pom-pom -->
          <circle cx="2" cy="-35" r="7" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
        </g>
      </g>

      <!-- Floating Dreamy "Z z z" Sleep Letters -->
      <g transform="translate(170, 75)">
        <text x="0" y="0" font-family="'Balsamiq Sans', sans-serif" font-weight="900" font-size="28" fill="#ffffff" stroke="#312e81" stroke-width="1.5" opacity="0.95">Z</text>
        <text x="14" y="-18" font-family="'Balsamiq Sans', sans-serif" font-weight="900" font-size="20" fill="#facc15" stroke="#312e81" stroke-width="1.2" opacity="0.85">z</text>
        <text x="24" y="-32" font-family="'Balsamiq Sans', sans-serif" font-weight="900" font-size="14" fill="#a5b4fc" opacity="0.75">z</text>
      </g>

      <!-- Twinkling Night Stars -->
      <polygon points="45,45 48,53 56,55 48,57 45,65 42,57 34,55 42,53" fill="#facc15" />
      <polygon points="190,135 192,140 198,142 193,144 191,150 189,144 184,142 189,140" fill="#fde047" />
      <polygon points="55,145 57,150 63,152 58,154 56,160 54,154 49,152 54,150" fill="#fde047" />
      <circle cx="170" cy="155" r="3" fill="#ffffff" opacity="0.8" />
      <circle cx="80" cy="50" r="2.5" fill="#ffffff" opacity="0.8" />
    </svg>
  `
};

async function run() {
  const outDir = path.resolve(__dirname, '../public/images');
  for (const [filename, svg] of Object.entries(ICONS)) {
    const outPath = path.join(outDir, filename);
    await sharp(Buffer.from(svg.trim()))
      .webp({ quality: 95 })
      .toFile(outPath);
    console.log('✓ Generated:', filename);
  }
}

run().catch(console.error);

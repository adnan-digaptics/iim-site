const sharp = require('sharp');
const fs = require('fs');

async function run() {
  const svgDivinity = `
  <svg width="400" height="90" viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg">
    <!-- UChicago Shield Crest -->
    <g transform="translate(12, 12)">
      <!-- Shield Outline -->
      <path d="M0,0 L50,0 C50,0 50,40 50,45 C50,60 25,68 25,68 C25,68 0,60 0,45 Z" fill="#800000" />
      <path d="M3.5,3.5 L46.5,3.5 C46.5,3.5 46.5,38 46.5,43 C46.5,56 25,64 25,64 C25,64 3.5,56 3.5,43 Z" fill="none" stroke="#ffffff" stroke-width="1.6" />
      <!-- Stylized Phoenix Rising -->
      <path d="M25,12 C28,16 30,18 34,17 C32,21 29,23 30,27 C27,24 25,25 25,25 C25,25 23,24 20,27 C21,23 18,21 16,17 C20,18 22,16 25,12 Z" fill="#ffffff" />
      <!-- Flame accents -->
      <path d="M25,26 C27,29 28,33 28,36 C28,39 26,41 25,41 C24,41 22,39 22,36 C22,33 23,29 25,26 Z" fill="#ffffff" />
      <!-- Open Book at bottom -->
      <path d="M14,46 C19,44 24,45 25,47 C26,45 31,44 36,46 L36,54 C31,52 26,53 25,55 C24,53 19,52 14,54 Z" fill="#ffffff" />
      <line x1="25" y1="47" x2="25" y2="55" stroke="#800000" stroke-width="1.2" />
    </g>

    <!-- Typography -->
    <text x="76" y="34" font-family="'Libre Baskerville', Georgia, serif" font-size="14.5" font-weight="700" fill="#10243a" letter-spacing="0.05em">THE UNIVERSITY OF CHICAGO</text>
    <text x="76" y="58" font-family="'DM Sans', Arial, sans-serif" font-size="16" font-weight="700" fill="#800000" letter-spacing="0.02em">The Divinity School</text>
  </svg>
  `;

  const svgDSA = `
  <svg width="360" height="90" viewBox="0 0 360 90" xmlns="http://www.w3.org/2000/svg">
    <!-- DSA Academic Monogram / Seal -->
    <g transform="translate(14, 12)">
      <circle cx="33" cy="33" r="31" fill="#faf7f2" stroke="#800000" stroke-width="2.5" />
      <circle cx="33" cy="33" r="26" fill="none" stroke="#d3c7bd" stroke-width="1.2" stroke-dasharray="3 3" />
      <text x="33" y="40" font-family="'Libre Baskerville', Georgia, serif" font-size="19" font-weight="700" fill="#800000" text-anchor="middle" letter-spacing="0.06em">DSA</text>
    </g>

    <!-- Typography -->
    <text x="92" y="36" font-family="'Libre Baskerville', Georgia, serif" font-size="15" font-weight="700" fill="#10243a" letter-spacing="0.02em">Divinity Students</text>
    <text x="92" y="56" font-family="'Libre Baskerville', Georgia, serif" font-size="15" font-weight="700" fill="#10243a" letter-spacing="0.02em">Association</text>
    <text x="92" y="73" font-family="'DM Sans', Arial, sans-serif" font-size="11" font-weight="600" fill="#7a8288" letter-spacing="0.08em" text-transform="uppercase">University of Chicago</text>
  </svg>
  `;

  await sharp(Buffer.from(svgDivinity)).png().toFile('public/images/symposium/sponsor-uchicago-divinity.png');
  await sharp(Buffer.from(svgDSA)).png().toFile('public/images/symposium/sponsor-dsa.png');
  console.log('Successfully generated sponsor-uchicago-divinity.png and sponsor-dsa.png');
}

run();

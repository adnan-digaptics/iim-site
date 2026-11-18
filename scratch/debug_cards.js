const sharp = require('sharp');
const fs = require('fs');

async function debugCards() {
  const input = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/.user_uploaded/media_1794952117294_90e76950.jpg';
  
  // Let's extract full card slices to verify exact bounds
  // Card 1: Welcoming Remarks
  await sharp(input)
    .extract({ left: 20, top: 300, width: 682, height: 85 })
    .toFile('public/images/symposium/debug-card1.jpg');

  // Card 2: Medical Knowledge
  await sharp(input)
    .extract({ left: 20, top: 385, width: 682, height: 105 })
    .toFile('public/images/symposium/debug-card2.jpg');

  // Card 3: Biomedical Knowledge
  await sharp(input)
    .extract({ left: 20, top: 490, width: 682, height: 100 })
    .toFile('public/images/symposium/debug-card3.jpg');

  // Card 4: Ghazalian Keynote
  await sharp(input)
    .extract({ left: 20, top: 590, width: 682, height: 80 })
    .toFile('public/images/symposium/debug-card4.jpg');

  // Card 5: Soul, Psyche
  await sharp(input)
    .extract({ left: 20, top: 670, width: 682, height: 90 })
    .toFile('public/images/symposium/debug-card5.jpg');

  // Card 6: Reconsidering Religion vs Science
  await sharp(input)
    .extract({ left: 20, top: 760, width: 682, height: 70 })
    .toFile('public/images/symposium/debug-card6.jpg');

  // Sponsors
  await sharp(input)
    .extract({ left: 20, top: 830, width: 682, height: 90 })
    .toFile('public/images/symposium/debug-sponsors.jpg');

  // Newsletter
  await sharp(input)
    .extract({ left: 0, top: 920, width: 722, height: 104 })
    .toFile('public/images/symposium/debug-newsletter.jpg');

  console.log('Saved debug cards');
}

debugCards().catch(console.error);

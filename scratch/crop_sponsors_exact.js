const sharp = require('sharp');

async function cropSponsorsExact() {
  const input = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/.user_uploaded/media_1794952117294_90e76950.jpg';

  // CMMA:
  await sharp(input)
    .extract({ left: 267, top: 852, width: 77, height: 68 })
    .toFile('public/images/symposium/sponsor-cmma.png');

  // Oxford:
  await sharp(input)
    .extract({ left: 401, top: 858, width: 70, height: 62 })
    .toFile('public/images/symposium/sponsor-oxford.png');

  // Templeton:
  await sharp(input)
    .extract({ left: 529, top: 863, width: 103, height: 43 })
    .toFile('public/images/symposium/sponsor-templeton.png');

  console.log('Sponsors exact cropped');
}

cropSponsorsExact().catch(console.error);

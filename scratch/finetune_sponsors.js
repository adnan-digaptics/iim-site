const sharp = require('sharp');

async function fineTuneSponsors() {
  const input = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/.user_uploaded/media_1794952117294_90e76950.jpg';

  // Inside the 722x1024 image:
  // CMMA (green circular logo):
  // Let's test a slice from y=835 to 895, x=260 to 330
  await sharp(input)
    .extract({ left: 266, top: 839, width: 68, height: 68 })
    .toFile('public/images/symposium/sponsor-cmma.png');

  // Oxford:
  await sharp(input)
    .extract({ left: 399, top: 843, width: 67, height: 58 })
    .toFile('public/images/symposium/sponsor-oxford.png');

  // Templeton:
  await sharp(input)
    .extract({ left: 529, top: 849, width: 104, height: 44 })
    .toFile('public/images/symposium/sponsor-templeton.png');

  console.log('Finetuned sponsors done');
}

fineTuneSponsors().catch(console.error);

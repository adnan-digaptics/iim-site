const sharp = require('sharp');
const fs = require('fs');

async function main() {
  const input = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/.user_uploaded/media_1794952117294_90e76950.jpg';
  
  // Let's inspect rows/bands in the 722x1024 image
  // 1. Hero Campus Image: top right from ~x=350 to 722, y=0 to ~200
  // Let's extract the campus hero image:
  await sharp(input)
    .extract({ left: 350, top: 0, width: 372, height: 210 })
    .toFile('public/images/symposium/hero-campus.jpg');
    
  console.log('Saved hero-campus.jpg');
}

main().catch(console.error);

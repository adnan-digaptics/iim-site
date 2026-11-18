const sharp = require('sharp');
const fs = require('fs');

async function extractPrecise() {
  const input = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/.user_uploaded/media_1794952117294_90e76950.jpg';

  // Hero Campus (full right half)
  await sharp(input)
    .extract({ left: 330, top: 0, width: 392, height: 215 })
    .toFile('public/images/symposium/hero-uchicago.jpg');

  // Video 1: Padela Welcoming
  await sharp(input)
    .extract({ left: 251, top: 317, width: 242, height: 68 })
    .toFile('public/images/symposium/video-welcome-padela.jpg');

  // Video 2: Pormann
  await sharp(input)
    .extract({ left: 251, top: 400, width: 212, height: 62 })
    .toFile('public/images/symposium/video-medical-pormann.jpg');

  // Video 3: Ragab
  await sharp(input)
    .extract({ left: 476, top: 400, width: 212, height: 62 })
    .toFile('public/images/symposium/video-medical-ragab.jpg');

  // Video 4: Shabana
  await sharp(input)
    .extract({ left: 251, top: 504, width: 133, height: 57 })
    .toFile('public/images/symposium/video-biomed-shabana.jpg');

  // Video 5: Kamaluddin
  await sharp(input)
    .extract({ left: 394, top: 504, width: 147, height: 57 })
    .toFile('public/images/symposium/video-biomed-kamaluddin.jpg');

  // Video 6: Padela Biomed
  await sharp(input)
    .extract({ left: 552, top: 504, width: 136, height: 57 })
    .toFile('public/images/symposium/video-biomed-padela.jpg');

  // Video 7: Akiti
  await sharp(input)
    .extract({ left: 251, top: 604, width: 260, height: 55 })
    .toFile('public/images/symposium/video-keynote-akiti.jpg');

  // Video 8: Suleman
  await sharp(input)
    .extract({ left: 251, top: 679, width: 139, height: 52 })
    .toFile('public/images/symposium/video-soul-suleman.jpg');

  // Video 9: Yusuf
  await sharp(input)
    .extract({ left: 401, top: 679, width: 139, height: 52 })
    .toFile('public/images/symposium/video-soul-yusuf.jpg');

  // Video 10: Rashid
  await sharp(input)
    .extract({ left: 550, top: 679, width: 138, height: 52 })
    .toFile('public/images/symposium/video-soul-rashid.jpg');

  // Video 11: Qureshi
  await sharp(input)
    .extract({ left: 251, top: 768, width: 260, height: 50 })
    .toFile('public/images/symposium/video-keynote-qureshi.jpg');

  // Sponsors
  await sharp(input)
    .extract({ left: 265, top: 834, width: 80, height: 80 })
    .toFile('public/images/symposium/sponsor-cmma.png');

  await sharp(input)
    .extract({ left: 400, top: 840, width: 70, height: 65 })
    .toFile('public/images/symposium/sponsor-oxford.png');

  await sharp(input)
    .extract({ left: 528, top: 846, width: 104, height: 44 })
    .toFile('public/images/symposium/sponsor-templeton.png');

  console.log('Precise extraction done');
}

extractPrecise().catch(console.error);

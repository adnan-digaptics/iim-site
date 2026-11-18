const sharp = require('sharp');

async function testVideoCrops() {
  const input = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/.user_uploaded/media_1794952117294_90e76950.jpg';

  // 1. Welcome Remarks: Padela
  // Card 1 top is around 307. Card bottom is around 385.
  // The video element is centered vertically inside card 1.
  await sharp(input)
    .extract({ left: 249, top: 315, width: 245, height: 71 })
    .toFile('public/images/symposium/video-welcome-padela.jpg');

  // 2. Medical Knowledge:
  // Card 2:
  // Pormann:
  await sharp(input)
    .extract({ left: 248, top: 399, width: 216, height: 63 })
    .toFile('public/images/symposium/video-medical-pormann.jpg');
  // Ragab:
  await sharp(input)
    .extract({ left: 474, top: 399, width: 216, height: 63 })
    .toFile('public/images/symposium/video-medical-ragab.jpg');

  // 3. Biomedical Knowledge:
  // Shabana:
  await sharp(input)
    .extract({ left: 249, top: 503, width: 137, height: 58 })
    .toFile('public/images/symposium/video-biomed-shabana.jpg');
  // Kamaluddin:
  await sharp(input)
    .extract({ left: 393, top: 503, width: 149, height: 58 })
    .toFile('public/images/symposium/video-biomed-kamaluddin.jpg');
  // Padela:
  await sharp(input)
    .extract({ left: 550, top: 503, width: 140, height: 58 })
    .toFile('public/images/symposium/video-biomed-padela.jpg');

  // 4. Ghazalian Keynote:
  // Akiti:
  await sharp(input)
    .extract({ left: 249, top: 602, width: 264, height: 58 })
    .toFile('public/images/symposium/video-keynote-akiti.jpg');

  // 5. Soul, Psyche & Death:
  // Suleman:
  await sharp(input)
    .extract({ left: 249, top: 678, width: 141, height: 53 })
    .toFile('public/images/symposium/video-soul-suleman.jpg');
  // Yusuf:
  await sharp(input)
    .extract({ left: 399, top: 678, width: 141, height: 53 })
    .toFile('public/images/symposium/video-soul-yusuf.jpg');
  // Rashid:
  await sharp(input)
    .extract({ left: 549, top: 678, width: 141, height: 53 })
    .toFile('public/images/symposium/video-soul-rashid.jpg');

  // 6. Religion vs Science:
  // Qureshi:
  await sharp(input)
    .extract({ left: 249, top: 767, width: 264, height: 52 })
    .toFile('public/images/symposium/video-keynote-qureshi.jpg');

  console.log('Video crops refined');
}

testVideoCrops().catch(console.error);

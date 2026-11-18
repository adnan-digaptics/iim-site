const sharp = require('sharp');
const fs = require('fs');

async function extractAll() {
  const input = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/.user_uploaded/media_1794952117294_90e76950.jpg';

  // 1. Hero Campus
  // In the original, the hero campus image goes from top=0 to ~y=215, left ~280 to 722
  await sharp(input)
    .extract({ left: 300, top: 0, width: 422, height: 215 })
    .toFile('public/images/symposium/hero-uchicago.jpg');

  // 2. Welcoming remarks video thumbnail:
  // Card 1: Welcoming Remarks - y around 310 to 375
  // The video thumbnail is around left: 251, top: 318, width: 242, height: 65
  await sharp(input)
    .extract({ left: 251, top: 318, width: 242, height: 65 })
    .toFile('public/images/symposium/video-welcome-padela.jpg');

  // 3. Medical Knowledge Session:
  // Peter E. Pormann: left: 251, top: 398, width: 212, height: 60
  // Ahmed Ragab: left: 476, top: 398, width: 212, height: 60
  await sharp(input)
    .extract({ left: 251, top: 398, width: 212, height: 60 })
    .toFile('public/images/symposium/video-medical-pormann.jpg');
  await sharp(input)
    .extract({ left: 476, top: 398, width: 212, height: 60 })
    .toFile('public/images/symposium/video-medical-ragab.jpg');

  // 4. Biomedical Knowledge Session:
  // Ayman Shabana: left: 251, top: 501, width: 133, height: 55
  // Kamaluddin Ahmed: left: 394, top: 501, width: 147, height: 55
  // Asim Padela: left: 552, top: 501, width: 136, height: 55
  await sharp(input)
    .extract({ left: 251, top: 501, width: 133, height: 55 })
    .toFile('public/images/symposium/video-biomed-shabana.jpg');
  await sharp(input)
    .extract({ left: 394, top: 501, width: 147, height: 55 })
    .toFile('public/images/symposium/video-biomed-kamaluddin.jpg');
  await sharp(input)
    .extract({ left: 552, top: 501, width: 136, height: 55 })
    .toFile('public/images/symposium/video-biomed-padela.jpg');

  // 5. Ghazalian Keynote:
  // Afifi al-Akiti: left: 251, top: 602, width: 260, height: 55
  await sharp(input)
    .extract({ left: 251, top: 602, width: 260, height: 55 })
    .toFile('public/images/symposium/video-keynote-akiti.jpg');

  // 6. Soul, Psyche & Death:
  // Mehrunisha Suleman: left: 251, top: 677, width: 139, height: 50
  // Asim Yusuf: left: 401, top: 677, width: 139, height: 50
  // Rafaqat Rashid: left: 550, top: 677, width: 138, height: 50
  await sharp(input)
    .extract({ left: 251, top: 677, width: 139, height: 50 })
    .toFile('public/images/symposium/video-soul-suleman.jpg');
  await sharp(input)
    .extract({ left: 401, top: 677, width: 139, height: 50 })
    .toFile('public/images/symposium/video-soul-yusuf.jpg');
  await sharp(input)
    .extract({ left: 550, top: 677, width: 138, height: 50 })
    .toFile('public/images/symposium/video-soul-rashid.jpg');

  // 7. Religion vs Science Keynote:
  // Omar Qureshi: left: 251, top: 766, width: 260, height: 50
  await sharp(input)
    .extract({ left: 251, top: 766, width: 260, height: 50 })
    .toFile('public/images/symposium/video-keynote-qureshi.jpg');

  // 8. Sponsors:
  // Green logo: left: 265, top: 835, width: 85, height: 80
  // Oxford: left: 400, top: 838, width: 75, height: 65
  // Templeton: left: 528, top: 842, width: 105, height: 45
  await sharp(input)
    .extract({ left: 262, top: 832, width: 88, height: 80 })
    .toFile('public/images/symposium/sponsor-cmma.png');
  await sharp(input)
    .extract({ left: 398, top: 836, width: 78, height: 68 })
    .toFile('public/images/symposium/sponsor-oxford.png');
  await sharp(input)
    .extract({ left: 528, top: 842, width: 105, height: 45 })
    .toFile('public/images/symposium/sponsor-templeton.png');

  console.log('All crops saved successfully');
}

extractAll().catch(console.error);

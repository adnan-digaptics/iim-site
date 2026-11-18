const { spawn } = require('child_process');
const fs = require('fs');
const http = require('http');

const SIZES = [
  { name: '1920', width: 1920, height: 1200 },
  { name: '1440', width: 1440, height: 1200 },
  { name: '1024', width: 1024, height: 1000 },
  { name: '768', width: 768, height: 1000 },
  { name: '390', width: 390, height: 844 },
  { name: '320', width: 320, height: 700 }
];

async function captureAll() {
  const screenshotsDir = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  for (const s of SIZES) {
    console.log(`Capturing ${s.name}px (${s.width}x${s.height})...`);
    const tempDir = `C:/Users/Admin/AppData/Local/Temp/chrome-cap-${s.name}-${Date.now()}`;
    const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
      '--headless=new',
      `--window-size=${s.width},${s.height}`,
      '--remote-debugging-port=9222',
      `--user-data-dir=${tempDir}`,
      'http://localhost:3000/multidisciplinary-symposium/'
    ]);

    try {
      await new Promise(r => setTimeout(r, 3500));
      const res = await fetch('http://127.0.0.1:9222/json');
      const tabs = await res.json();
      const pageTab = tabs.find(t => t.url.includes('multidisciplinary-symposium') || t.type === 'page');
      if (!pageTab) throw new Error('No page tab found');

      const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
      await new Promise((resolve) => ws.onopen = resolve);

      let id = 1;
      function send(method, params = {}) {
        return new Promise((resolve, reject) => {
          const msgId = id++;
          const handler = (event) => {
            const data = JSON.parse(event.data);
            if (data.id === msgId) {
              ws.removeEventListener('message', handler);
              if (data.error) reject(data.error);
              else resolve(data.result);
            }
          };
          ws.addEventListener('message', handler);
          ws.send(JSON.stringify({ id: msgId, method, params }));
        });
      }

      await send('Page.enable');
      await send('Emulation.setDeviceMetricsOverride', {
        width: s.width,
        height: s.height,
        deviceScaleFactor: 1,
        mobile: s.width < 768
      });

      await new Promise(r => setTimeout(r, 1200));

      // Viewport screenshot (top of page showing hero with NO header)
      const { data: topData } = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${screenshotsDir}/symposium_${s.name}_top.png`, Buffer.from(topData, 'base64'));
      console.log(`Saved symposium_${s.name}_top.png`);

      // Full page screenshot
      const { data: fullData } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
      fs.writeFileSync(`${screenshotsDir}/symposium_${s.name}_full.png`, Buffer.from(fullData, 'base64'));
      console.log(`Saved symposium_${s.name}_full.png`);

      ws.close();
    } catch (err) {
      console.error(`Error on ${s.name}:`, err.message);
    } finally {
      chrome.kill();
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

captureAll().then(() => console.log('All screenshots captured!')).catch(console.error);

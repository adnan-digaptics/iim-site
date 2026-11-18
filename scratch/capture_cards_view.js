const { spawn } = require('child_process');
const fs = require('fs');

async function captureCards() {
  const screenshotsDir = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/screenshots';
  const tempDir = `C:/Users/Admin/AppData/Local/Temp/chrome-cards-${Date.now()}`;

  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new',
    '--window-size=1440,1200',
    '--remote-debugging-port=9222',
    `--user-data-dir=${tempDir}`,
    'http://localhost:3000/multidisciplinary-symposium/'
  ]);

  try {
    await new Promise(r => setTimeout(r, 4000));
    const res = await fetch('http://127.0.0.1:9222/json');
    const tabs = await res.json();
    const pageTab = tabs.find(t => t.url.includes('multidisciplinary-symposium') || t.type === 'page');

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
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1100, deviceScaleFactor: 1, mobile: false });

    // Scroll to middle cards
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 950)' });
    await new Promise(r => setTimeout(r, 800));
    let { data } = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${screenshotsDir}/check_cards_mid.png`, Buffer.from(data, 'base64'));

    // Scroll to lower cards & sponsors
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1650)' });
    await new Promise(r => setTimeout(r, 800));
    data = (await send('Page.captureScreenshot', { format: 'png' })).data;
    fs.writeFileSync(`${screenshotsDir}/check_cards_bottom.png`, Buffer.from(data, 'base64'));

    console.log('Saved check_cards_mid.png and check_cards_bottom.png');
    ws.close();
  } finally {
    chrome.kill();
  }
}

captureCards().catch(console.error);

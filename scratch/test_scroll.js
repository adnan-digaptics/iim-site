const { spawn } = require('child_process');
const fs = require('fs');

async function testScroll() {
  const screenshotsDir = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/screenshots';
  const tempDir = `C:/Users/Admin/AppData/Local/Temp/chrome-sc-${Date.now()}`;
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new',
    '--window-size=1440,1100',
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

    // Full page screenshot!
    const { data: fullData } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    fs.writeFileSync(`${screenshotsDir}/check_symposium_latest_full.png`, Buffer.from(fullData, 'base64'));

    ws.close();
    console.log('Saved check_symposium_latest_full.png');
  } finally {
    chrome.kill();
  }
}

testScroll().catch(console.error);

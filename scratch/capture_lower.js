const { spawn } = require('child_process');
const fs = require('fs');

async function test() {
  const screenshotsDir = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/screenshots';
  const tempDir = `C:/Users/Admin/AppData/Local/Temp/chrome-lower-${Date.now()}`;
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

    // Scroll to 4th card (Ghazalian Keynote)
    await send('Runtime.evaluate', { expression: 'document.querySelectorAll(".symp-sessionCard")[3].scrollIntoView({ block: "center" })' });
    await new Promise(r => setTimeout(r, 1000));
    let { data } = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${screenshotsDir}/check_card_akiti_view.png`, Buffer.from(data, 'base64'));

    // Scroll to 6th card (Religion vs Science Keynote)
    await send('Runtime.evaluate', { expression: 'document.querySelectorAll(".symp-sessionCard")[5].scrollIntoView({ block: "center" })' });
    await new Promise(r => setTimeout(r, 1000));
    data = (await send('Page.captureScreenshot', { format: 'png' })).data;
    fs.writeFileSync(`${screenshotsDir}/check_card_qureshi_view.png`, Buffer.from(data, 'base64'));

    // Scroll to Sponsors
    await send('Runtime.evaluate', { expression: 'document.querySelector(".symp-sponsors").scrollIntoView()' });
    await new Promise(r => setTimeout(r, 1000));
    data = (await send('Page.captureScreenshot', { format: 'png' })).data;
    fs.writeFileSync(`${screenshotsDir}/check_sponsors_newsletter.png`, Buffer.from(data, 'base64'));

    ws.close();
    console.log('Saved check_card_akiti_view.png, check_card_qureshi_view.png, and check_sponsors_newsletter.png');
  } finally {
    chrome.kill();
  }
}

test().catch(console.error);

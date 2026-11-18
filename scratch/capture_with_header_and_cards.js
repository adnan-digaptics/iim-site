const { spawn } = require('child_process');
const fs = require('fs');

async function captureDetailed() {
  const screenshotsDir = 'C:/Users/Admin/.gemini/antigravity/brain/71d99c3a-eaf7-4415-b8b9-3b8850125705/screenshots';
  const tempDir = `C:/Users/Admin/AppData/Local/Temp/chrome-det-${Date.now()}`;

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
    if (!pageTab) throw new Error('No page tab');

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

    // 1. Desktop 1440px Top (Header + Hero)
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await new Promise(r => setTimeout(r, 1000));
    let { data } = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${screenshotsDir}/check_desktop_header_hero.png`, Buffer.from(data, 'base64'));
    console.log('Saved check_desktop_header_hero.png');

    // 2. Desktop 1440px Sessions Cards (Scrolled to cards)
    await send('Runtime.evaluate', { expression: 'document.querySelector(".symp-sessions").scrollIntoView()' });
    await new Promise(r => setTimeout(r, 1000));
    data = (await send('Page.captureScreenshot', { format: 'png' })).data;
    fs.writeFileSync(`${screenshotsDir}/check_desktop_cards.png`, Buffer.from(data, 'base64'));
    console.log('Saved check_desktop_cards.png');

    // 3. Mobile 390px Top (Header + Hero)
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await new Promise(r => setTimeout(r, 1000));
    data = (await send('Page.captureScreenshot', { format: 'png' })).data;
    fs.writeFileSync(`${screenshotsDir}/check_mobile_header_hero.png`, Buffer.from(data, 'base64'));
    console.log('Saved check_mobile_header_hero.png');

    // 4. Mobile 390px Sessions Cards
    await send('Runtime.evaluate', { expression: 'document.querySelector(".symp-sessions").scrollIntoView()' });
    await new Promise(r => setTimeout(r, 1000));
    data = (await send('Page.captureScreenshot', { format: 'png' })).data;
    fs.writeFileSync(`${screenshotsDir}/check_mobile_cards.png`, Buffer.from(data, 'base64'));
    console.log('Saved check_mobile_cards.png');

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureDetailed().then(() => console.log('All detailed screenshots taken!')).catch(console.error);

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projects = [
  { url: 'https://swakash.in', file: 'swakash.webp' },
  { url: 'https://masaimakhana.com', file: 'masai-makhana.webp' },
  { url: 'https://adazo.in', file: 'adazo.webp' },
  { url: 'https://www.voylla.com', file: 'voylla.webp' },
  { url: 'https://bnfpiston.com', file: 'bnf-piston.webp' }
];

const outDir = path.join(__dirname, 'public', 'projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });

  for (const project of projects) {
    let page;
    try {
      page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      console.log(`Navigating to ${project.url}...`);
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait 10 seconds for initial pre-loader animations to finish
      await new Promise(r => setTimeout(r, 10000));
      
      const filePath = path.join(outDir, project.file);
      await page.screenshot({ path: filePath, type: 'webp', quality: 80 });
      console.log(`Successfully saved screenshot for ${project.file}`);
    } catch (e) {
      console.error(`Failed to take screenshot for ${project.url}:`, e.message);
    } finally {
      if (page) await page.close();
    }
  }

  await browser.close();
  console.log('All done!');
})();

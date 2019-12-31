const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({ headless: false });
//   const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://m.heureka.sk/inteligentne-hodinky/samsung-galaxy-watch-46mm-sm-r800/?do=shopFilterForm-submit&order=2');
  await page.setViewport({width: 1500, height: 1000})
  await page.screenshot({ path: 'output/google.png' });
  await browser.close();
}

getPic();

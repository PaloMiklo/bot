const puppeteer = require('puppeteer');

let scrape = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(
      'https://m.heureka.sk/inteligentne-hodinky/samsung-galaxy-watch-46mm-sm-r800/'
    );
    await page.click(
      '#product-info-container > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2)'
    );
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
      let data = [];
      let items = document.querySelectorAll(
        '.inner.shop-list__shop-item__inner'
      );

      for (let i of items) {
        let seller = i.children[0].innerText;
        let rating = i.children[2].innerText;
        let price = i.children[4].innerText;
        data.push({ seller, rating, price });
      }
      data.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
      return data;
    });
    browser.close();
    console.log('Success!');
    return result;
  } catch {
    throw Error('Error!');
  }
};

module.exports = scrape();

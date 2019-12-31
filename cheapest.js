const puppeteer = require('puppeteer');

let scrape = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
      'https://m.heureka.sk/inteligentne-hodinky/samsung-galaxy-watch-46mm-sm-r800/?do=shopFilterForm-submit&order=2'
    );
    await page.click(
      '#product-info-container > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > label'
    );
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
      let title = document.querySelector(
        '#snippet--shopList > li:nth-child(1) > div > a > span > span.shop-name'
      ).innerText;
      let price = document.querySelector(
        '#snippet--shopList > li:nth-child(1) > div > a > span > span.price-delivery > span.price'
      ).innerText;

      return {
        title,
        price
      };
    });
    return result;
  } catch (err) {
    console.log(error(err));
    browser.close();
  }
};

scrape().then(value => {
  console.log(value); // Success!
});

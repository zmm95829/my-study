const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  console.log(browser);
  console.log("start");
  const page = await browser.newPage();
  await page.goto("https://www.baidu.com/");
  // await page.goto("https://y.qq.com");
  await page.screenshot({ path: "D:\\temp\\yqq.png" });
  console.log("ok");
  browser.close();
})();

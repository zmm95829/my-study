const puppeteer = require("puppeteer");

/**
 * 1. 百度截屏
 */
async function screenshotBaiDu() {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  console.log("start");
  const page = await browser.newPage();
  await page.goto("https://www.baidu.com/");
  await page.screenshot({ path: "E:\\temp\\baidu.png" });
  console.log("ok");
  browser.close();
};

/**
 * 2.登陆cofco
 */
async function loginCofco() {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    headless: false
  });
  console.log("start");
  const page = await browser.newPage();
  // 登陆
  await page.goto("http://localhost:12131/#/login?redirect=%2Fhome");
  await page.screenshot({ path: "E:\\temp\\cofcoLogin.png" });
  await page.type("#name", "oatest02");
  await page.type("#password", "111111");
  await page.click(".btn-login");



//   await page.on("response", response => {    
//     if (response.url().indexOf("/services/ctbms/api/" !== -1)){
//         response.text().then(v => {
//           console.log("111");
//           console.log(v);
//         });
//     } 
// }); 

  // 去表单
  // await page.goto("http://localhost:12131/#/%E5%90%88%E5%90%8C%E7%AE%A1%E7%90%86/%E8%B4%AD%E5%85%A5%E5%90%88%E5%90%8C%E7%94%B3%E8%AF%B7/Add");
  await page.screenshot({ path: `E:\\temp\\a${Math.random()}.png` });
  console.log("ok");
  // browser.close();
};
module.exports = {
  screenshotBaiDu,
  loginCofco
};
// const Page = require("./helpers/page");

// let page;
// beforeEach(async () => {
//   page = await Page.build();
//   await page.goto("http://localhost:3000/");
// });

// afterEach(async () => {
//   await page.close();
// });

// test("header shows correct text", async () => {
//   const text = await page.$eval("a.brand-logo", (el) => el.innerHTML);

//   expect(text).toEqual("Blogster");
// });

// test("clicking login should redirect to google oauth", async () => {
//   await page.click("ul a");

//   const url = await page.url();

//   expect(url).toMatch(/accounts\.google\.com/);
// });

// test("logout button should be displayed when logged in", async () => {
//   await page.login();
//   //   await page.waitFor("ul li:last-child a");
//   const text = await page.$eval("ul li:last-child a", (el) => el.innerHTML);

//   expect(text).toEqual("Logout");
// });

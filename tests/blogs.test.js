const Page = require("./helpers/page");

let page;
beforeEach(async () => {
  page = await Page.build();
  await page.goto("http://localhost:3000/");
});

afterEach(async () => {
  await page.close();
});

describe("When logged in", async () => {
  beforeEach(async () => {
    await page.login();
    await page.click(".btn-floating");
  });

  test("I should see the form for creating a blog", async () => {
    const text = await page.$eval("label", (el) => el.innerHTML);

    expect(text).toEqual("Blog Title");
  });

  test("I should be able to create a blog", async () => {
    await page.type(".title input", "puppeteer");
    await page.type(".content input", "new blog");

    await page.click("button");
    await page.click(".green");

    await page.goto("localhost:3000/blogs");

    await page.waitFor("p");

    const content = await page.$eval("p", (el) => el.innerHTML);

    expect(content).toEqual("new blog");
  });
});

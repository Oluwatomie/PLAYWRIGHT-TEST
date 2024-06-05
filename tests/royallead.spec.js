import { test, expect } from "@playwright/test";

test("signup", async ({ page }) => {
  await page.goto("https://royalleadhub.com.ng/");
  await page.getByRole("link", { name: "Signup" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("joy");
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("ogunbakin");
  await page.getByPlaceholder("Phone").click();
  await page.getByPlaceholder("Phone").fill("08028277706");
  await page.getByPlaceholder("Phone").press("Tab");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("tomsax4real@gmail.com");
  await page.getByText("Continue").click();
  await page.getByLabel("State").selectOption("Lagos");
  await page.getByPlaceholder("Password", { exact: true }).click();
  await page.getByPlaceholder("Password", { exact: true }).fill("test1234");
  await page.getByPlaceholder("Confirm Password").click();
  await page.getByPlaceholder("Confirm Password").fill("test1234");
  await page.getByPlaceholder("Pin").click();
  await page.getByPlaceholder("Pin").fill("1234");
  await page.getByPlaceholder("Referal").click();
  await page.getByRole("button", { name: "Register" }).click();
  await page.getByRole("button", { name: "OK" }).click();
});

/*test("login+airtime purchase", async ({ page }) => {
  await page.goto("https://royalleadhub.com.ng/");
  await page.locator("#home").getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("Phone Number").click();
  await page.getByPlaceholder("Phone Number").fill("08028277706");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("test1234");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "OK" }).click();
});*/

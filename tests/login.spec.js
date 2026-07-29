const { test, expect } = require("@playwright/test");

test("User can login", async ({ page }) => {
  await page.goto("http://localhost:4000");

  await page.fill("#username", "testuser");

  await page.fill("#password", "password123");

  await page.click("#login");

  await expect(page).toHaveURL(/products/);
});

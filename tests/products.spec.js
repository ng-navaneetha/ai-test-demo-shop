const { test, expect } = require("@playwright/test");

test("User can view products", async ({ page }) => {
  await page.goto("http://localhost:4000/products");

  await expect(page.locator("#page-title")).toHaveText("Products");

  await expect(page.locator("#products-container div")).toHaveCount(3);
});

test("User can add product to cart", async ({ page }) => {
  await page.goto("http://localhost:4000/products");

  await page.locator(".add-cart").first().click();

  await expect(page.locator("#cart-count")).toHaveText("1");
});

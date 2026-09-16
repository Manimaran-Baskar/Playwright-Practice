import { test, expect } from '@playwright/test';

test('Add products to the cart using code gen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //await page.locator('[data-test="username"]').click();
  await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
  //await page.locator('[data-test="login-password"]').click();
//   await page.locator('body').press('ControlOrMeta+c');
//   await page.locator('[data-test="password"]').click();
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();
  await page.locator('[data-test="product-sort-container"]').selectOption({index: 1});
  const filteredOption = await page.locator("span[data-test='active-option']").textContent();
  expect(filteredOption).toBe('Name (Z to A)');
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  expect(page.locator("button[id='remove-test.allthethings()-t-shirt-(red)']")).toBeVisible();
  const produtName = "Test.allTheThings() T-Shirt (Red)";
  await page.locator('[data-test="shopping-cart-link"]').click();
  expect(page.locator(`//div[@class='inventory_item_name'][.='${produtName}']`)).toBeVisible();
  
});
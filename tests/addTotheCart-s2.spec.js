import {test,expect} from '@playwright/test';

test('Add products to the cart', async ({page}) =>{

await page.goto('https://www.saucedemo.com/');
await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
const produtName = "Sauce Labs Bike Light";
await page.locator(`//div[.='${produtName}']/ancestor::div[@class='inventory_item_label']/following-sibling::div//button`).click();
await page.locator('[data-test="shopping-cart-link"]').click();
await expect(page.locator(`//div[@class='inventory_item_name'][.='${produtName}']`)).toBeVisible();

});
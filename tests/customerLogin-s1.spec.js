import {test, expect} from '@playwright/test';

test('Customer valid Login', async ({page}) =>{

await page.goto('https://www.saucedemo.com/');
await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
const productsHeader= await page.getByText('Product').textContent();
expect(productsHeader).toBe('Products');

});
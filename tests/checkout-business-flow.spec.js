import { test, expect } from '@playwright/test';

test.describe('Product checkout business flow', () => {
  test('Successful checkout journey', async ({ page }) => {
    // Open the SauceDemo login page and validate the standard checkout flow
    await page.goto('https://www.saucedemo.com/');

    // Enter valid login username for the standard user
    await page.locator('input[data-test="username"]').fill('standard_user');

    // Enter valid login password for the standard user
    await page.locator('input[data-test="password"]').fill('secret_sauce');

    // Submit the credentials to sign in to the store
    await page.locator('input[data-test="login-button"]').click();

    // Confirm the inventory page loaded after a successful login
    await expect(page.locator('[data-test="title"]')).toBeVisible();

    // Add the selected Sauce Labs Backpack to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Open the cart to review the selected product before checkout
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Proceed from the cart to the checkout form
    await page.locator('[data-test="checkout"]').click();

    // Enter first name for checkout customer information
    await page.locator('[data-test="firstName"]').fill('John');

    // Enter last name for checkout customer information
    await page.locator('[data-test="lastName"]').fill('Doe');

    // Enter ZIP code for checkout customer information
    await page.locator('[data-test="postalCode"]').fill('12345');

    // Continue to the order summary page after entering customer details
    await page.locator('[data-test="continue"]').click();

    // Confirm the selected product appears in the order summary
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();

    // Complete the order and submit the final purchase
    await page.locator('[data-test="finish"]').click();

    // Verify the successful order completion confirmation message
    await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  });
});

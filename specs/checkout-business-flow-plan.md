# Checkout Business Flow Test Plan

## Application Overview

This plan covers the end-to-end product checkout journey on SauceDemo for a standard user: login, select a product, add to cart, continue through checkout, complete payment details, and confirm the successful order.

## Test Scenarios

### 1. Product checkout business flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful checkout journey

**File:** `tests/checkout-business-flow.spec.ts`

**Steps:**
  1. Open the SauceDemo home page at https://www.saucedemo.com/
    - expect: The login page loads successfully.
    - expect: The username and password inputs are visible and ready to use.
  2. Log in with a valid user account using username standard_user and password secret_sauce
    - expect: The user is redirected to the inventory page.
    - expect: The product catalog is visible without any login error message.
  3. Select a product from the product list, such as Sauce Labs Backpack
    - expect: The product is clearly visible in the catalog and is available for purchase.
    - expect: The user can proceed to view or add the item to the cart.
  4. Add the selected product to the cart
    - expect: The cart badge updates to show one item in the cart.
    - expect: The Add to Cart button changes to Remove for the chosen product.
  5. Open the cart from the shopping cart icon
    - expect: The cart page loads with the selected product displayed.
    - expect: The correct product name and price are visible in the cart summary.
  6. Proceed to checkout
    - expect: The checkout information form loads.
    - expect: The user is able to move from cart to customer information entry.
  7. Enter valid customer information (first name, last name, and postal/ZIP code)
    - expect: All required fields accept valid input.
    - expect: The Continue button is enabled and can be clicked without validation issues.
  8. Continue to the order summary page
    - expect: The checkout overview page loads.
    - expect: The chosen product and total values are displayed correctly in the order summary.
  9. Complete the order by clicking Finish
    - expect: The order confirmation page appears.
    - expect: The confirmation message clearly indicates the order was completed successfully.
  10. Verify the final successful order confirmation screen
    - expect: A success message such as Thank you for your order is visible.
    - expect: The user is shown a completed order state and a path to continue shopping or return to inventory.

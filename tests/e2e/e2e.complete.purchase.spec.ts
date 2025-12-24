import { test, expect } from '@playwright/test';
import { LoginPage } from '../../lib/pages/loginPage';
import { ProductsPage } from '../../lib/pages/productsPage';
import { CartPage } from '../../lib/pages/cartPage';
import { PurchasePage } from '../../lib/pages/completePurchasePage';
import { CheckoutCompletePage } from '../../lib/pages/checkoutCompletePage';
import { user } from '../../data/user-data';
import { purchaseData } from '../../data/purchase-data';

test('E2E – User completes purchase of Sauce Labs Fleece Jacket', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const purchasePage = new PurchasePage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    let productName: string;
    let productPrice: string;

    await test.step('Login into the application', async () => {
        await loginPage.goTo();
        await loginPage.login(user.username, user.password);
    });

    await test.step('Locate target product and capture name and price', async () => {
        await productsPage.goToProduct(purchaseData.productName);

        productName = await productsPage.getProductName();
        productPrice = await productsPage.getProductPrice();
    });

    await test.step('Add product to cart and navigate to cart page', async () => {
        await productsPage.addToCart();
        await productsPage.goToCart();
    });

    await test.step('Validate product name and price in cart', async () => {
        expect(await cartPage.getProductName()).toBe(productName);
        expect(await cartPage.getProductPrice()).toBe(productPrice);
    });

    await test.step('Complete checkout information and finalize purchase', async () => {
        await cartPage.checkout();
        await purchasePage.fillInformation(
            purchaseData.firstName,
            purchaseData.lastName,
            purchaseData.postalCode
        );
        await purchasePage.continue();
        await purchasePage.finish();
    });

    await test.step('Validate purchase completion message', async () => {
        const confirmationMessage =
            await checkoutCompletePage.getConfirmationMessage();

        expect(confirmationMessage).toBe('Checkout: Complete!');
    });
});

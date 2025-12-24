import { Page } from '@playwright/test';
import { CartLocators } from '../locators/cartLocators';

export class CartPage {
    constructor(private page: Page) { }

    async getProductName() {
        return this.page.locator(CartLocators.productName).innerText();
    }

    async getProductPrice() {
        return this.page.locator(CartLocators.productPrice).innerText();
    }

    async checkout() {
        await this.page.locator(CartLocators.checkoutButton).click();
    }
}

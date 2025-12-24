import { Page } from '@playwright/test';
import { ProductsLocators } from '../locators/productLocators';

export class ProductsPage {
    constructor(private page: Page) { }

    private productCard(productName: string) {
        return this.page.locator(ProductsLocators.inventoryItem, {
            hasText: productName,
        });
    }

    async getProductName() {
        return this.page.locator(ProductsLocators.itemNameGet)
            .innerText();
    }

    async getProductPrice() {
        return this.page.locator(ProductsLocators.itemPriceGet)
            .innerText();
    }

    async goToProduct(productName: string) {
        await this.productCard(productName)
            .locator(ProductsLocators.itemName)
            .click();
    }

    async addToCart() {
        await this.page.locator(ProductsLocators.addToCartButton).click()
    }

    async goToCart() {
        await this.page.locator(ProductsLocators.cartLink).click();
    }
}

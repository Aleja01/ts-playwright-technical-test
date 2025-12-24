import { expect, Page } from '@playwright/test';
import { CheckoutCompleteLocators } from '../locators/checkoutCompleteLocators';

export class CheckoutCompletePage {
    constructor(private page: Page) { }

    async getConfirmationMessage() {
        return this.page.locator(CheckoutCompleteLocators.completionHeader).textContent();
    }
}

import { Page } from '@playwright/test';
import { PurchaseLocators } from '../locators/completePurchase';

export class PurchasePage {
    constructor(private page: Page) { }

    async fillInformation(firstName: string, lastName: string, postalCode: string) {

        await this.page.locator(PurchaseLocators.firstNameInput).fill(firstName);
        await this.page.locator(PurchaseLocators.lastNameInput).fill(lastName);
        await this.page.locator(PurchaseLocators.postalCodeInput).fill(postalCode);

    }

    async continue() {
        await this.page.locator(PurchaseLocators.continueButton).click();
    }

    async finish() {
        await this.page.locator(PurchaseLocators.finishButton).click();
    }
}

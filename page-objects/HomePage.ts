import { Page } from "@playwright/test";

export class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
    }
}


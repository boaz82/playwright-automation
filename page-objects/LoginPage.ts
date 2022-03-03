import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
    // Define selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator
    readonly pageSubTitle: Locator

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator("input[name=username]")
        this.passwordInput = page.locator("input[name=password]")
        this.loginButton = page.locator("text=Log In")
        this.errorMessage = page.locator(".error")
        this.pageSubTitle = page.locator(".caption")
    }
    // Define login page methods
    async fillUsernamePassword(username: string, password: string) {
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
    }

    async clickLogin() {
        await this.loginButton.click()
    }

    async assertErrorMessage(errMessage: string) {
        await expect(this.errorMessage).toContainText(errMessage)
    }

    async checkPageSubTitleText() {
        await expect(this.pageSubTitle).toContainText("Experience the difference")
    }

    async checkPageTitleText() {
        await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking")
    }

    async checkPageUrl() {
        await expect(this.page).toHaveURL("https://parabank.parasoft.com/parabank/index.htm")
    }
}
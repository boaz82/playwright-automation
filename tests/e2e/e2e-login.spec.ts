import { test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel("Login page tests", () => {
    let loginPage: LoginPage
    let homePage: HomePage
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        await homePage.visit()
    })

    test("Check page redirect to the required url", async ({ page }) => {
        await loginPage.checkPageUrl()
    })

    test("Check page title", async ({ page }) => {
        await loginPage.checkPageTitleText()
    })

    test("Check page subtitle text", async ({ page }) => {
        await loginPage.checkPageSubTitleText()
    })
    
    test("Check validation error message when click on login without enter values @validationError", async ({ page }) => {
        await loginPage.clickLogin()
        await loginPage.assertErrorMessage('Please enter a username and password.')
    })
    
    test("Check validation error message when fill in wrong username and password @validationError", async ({ page }) => {
        await loginPage.fillUsernamePassword('invalid username', 'invalid password')
        await loginPage.clickLogin()
        await loginPage.assertErrorMessage('The username and password could not be verified.')
    })
})
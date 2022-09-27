/**
 * This page object contains all methods, selectors and functionality
 * that is shared across all page objects
 */

export default class BasePage {

    // Locators
    success_message = "#flash"

    // Interactions Methods

    // Workflows
    
    /**
     * Naviagte to login page
     */
     public async navigate_to_login () {
        await browser.url("/login")
    }

    // Verifications
}


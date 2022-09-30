import Page from '../base/basepage';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends Page {
        
    // Login fields
    username = "#username"
    password = "#password"
    submit_button = "button[type='submit']"

    /**
     * Login to the application
     * @param {string} username - provide username to enter
     * @param {string} password - provide password to enter
     */
    public async login (username: string, password: string) {
        await $(this.username).setValue(username);
        await $(this.password).setValue(password);
        await $(this.submit_button).click();
    }

    /**
     * Verify login success message
     */
     public async login_success_message () {
        await $(this.success_message).isExisting();
        return (await $(this.success_message).getText()).includes('You logged into a secure area!');
    }

}

export default new LoginPage();

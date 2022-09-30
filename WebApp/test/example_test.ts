import LoginPage from  '../pages/example_login_page';
import allureReporter from '@wdio/allure-reporter';
import user_data from '../config/test_data/example_data.json';

suite('My Login application', () => {

    suiteSetup('Suite Setup', async () => {
        // Suite level setup
    });

    suiteTeardown('Suite Teardown', async () => {
        // Suite level teardown
    });

    setup('Test Setup',async () => {
        // Test level setup
        await LoginPage.navigate_to_login();
    })

    teardown('Test Teardown',async () => {
        // Test level teardown
        await browser.refresh();
    })

    user_data.login_T001.forEach((data, index) => {
        test(`Should login with valid credentials -> Iteration: ${index}`, async () => {
            allureReporter.addTestId("T001");
            allureReporter.addDescription("Verify login", 'text');
    
            let username = data.username;
            let password = data.password;
            await LoginPage.login(username, password);
    
            let login_result = await LoginPage.login_success_message();
            expect(login_result).toBe(true);
            
        });
    })
    
});

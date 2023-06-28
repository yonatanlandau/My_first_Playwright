const {test, expect} = require ('@playwright/test')

test('Login - Submit empty form', async ({page}) => {
    
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(title).toBe('Swag Labs');

    if(title !== 'Swag Labs'){
        throw new Error('Title does not match the expected value')
    }


    const userNameFieldLocator = page.locator('#user-name');
    await expect(userNameFieldLocator).toBeEmpty();

    const passwordFieldLocator = page.locator('#password');
    await expect(passwordFieldLocator).toBeEmpty();

    await userNameFieldLocator.type('standard_user');
    await passwordFieldLocator.type('secret_sauce');

    const loginButton = page.locator('#login-button');

    await loginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})
const { test, expect } = require('../fixtures/fixtures');

test('Login test', async ({ loginPage }) => {

    await loginPage.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await loginPage.login('Admin', 'admin123');
});
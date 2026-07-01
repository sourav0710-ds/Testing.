const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[type="password"]');
        this.loginBtn = page.locator('input[type="submit"]');
    }

    async login(user, pass) {
        await this.fill(this.username, user);
        await this.fill(this.password, pass);
        await this.click(this.loginBtn);
    }
}

module.exports = LoginPage;
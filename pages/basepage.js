
//we are creat ing a base page to help other page classes 
//every othe page class will extend  this class.the click,fill,will be wraped in wait for
// for element is to be frontendt before actualy click able we will define xplicity here once so that no other class have to think out .
//this base page class central all the browser action this base page class common they are implimented and use every where.
//without base class this .username input
//with base class .the main resson in the page it makes reuseable .2.maintainable ,3.consistent and reduce flakiness.
//why we need base class
// common utility.
// custom utility
//module.export

// class BasePage {
//     constructor(page) {
//         this.page = page;
//     }

//     async goto(path = "/") {
//         await this.page.goto(path);
//     }

//     async click(locator) {
//         await locator.waitFor({ state: 'visible' });
//         await locator.click();
//     }

//     async fill(locator, text) {
//         await locator.waitFor({ state: 'visible' });
//         await locator.fill(text);
//     }

//     async getText(locator) {
//         await locator.waitFor({ state: 'visible' });
//         return (await locator.textContent())?.trim() ?? '';
//     }

//     async isVisible(locator, timeout = 5000) {
//         try {
//             await locator.waitFor({
//                 state: 'visible',
//                 timeout
//             });
//             return true;
//         } catch {
//             return false;
//         }
//     }
// }

// module.exports = BasePage;
class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, text) {
        await locator.fill(text);
    }

    async getText(locator) {
        return (await locator.textContent())?.trim() ?? '';
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }
}

module.exports = BasePage;
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function init() {
	try {
		const options = new chrome.Options();
		const driver = await new Builder()
			.forBrowser('chrome')
			.setChromeOptions(options)
			.build();

		await driver.quit();
	} catch (error) {
		console.log(error);
	}
}

init();


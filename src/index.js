/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function init() {
	try {
		const options = new chrome.Options();
		const driver = await new Builder()
			.forBrowser('chrome')
			.setChromeOptions(options)
			.build();

		// Go to badoo
		await driver.get('https://badoo.com');

		// 🚨 click accept cookie manually

		// 🚨 click signin cookie manually

		// 🚨 insert email and password manually and proceed with verification

		const likeButtonRef = By.xpath('//*[@id="mm_cc"]/div[1]/section/div/div[2]/div/div[2]/div[1]/div[1]');
		await driver.wait(until.elementLocated(likeButtonRef), 60000);
		const likeButton = driver.findElement(likeButtonRef);
		likeButton.click();

		const wannaBeNotifiedRef = By.xpath('/html/body/aside/section/div[1]/div/div/section/div/div/div/div[2]/div');
		await driver.wait(until.elementLocated(wannaBeNotifiedRef), 60000);
		const wannaBeNotifiedButton = driver.findElement(wannaBeNotifiedRef);
		wannaBeNotifiedButton.click();

		while (true) {
			await driver.actions().pause(500).perform();
			const likeButtonRef = By.xpath('//*[@id="mm_cc"]/div[1]/section/div/div[2]/div/div[2]/div[1]/div[1]');
			await driver.wait(until.elementLocated(likeButtonRef), 10000);
			const likeButton = await driver.findElement(likeButtonRef);
			driver.wait(until.elementIsVisible(likeButton), 10000);
			likeButton.click();
		}
	} catch (error) {
		console.log(error);
	}
}

init();

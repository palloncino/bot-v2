import dotenv from 'dotenv';
import {Builder} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

dotenv.config();

async function startBot() {
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

startBot();

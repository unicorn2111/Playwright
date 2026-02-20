import { test, expect, Page, Locator, Browser} from '@playwright/test';
import {webkit, firefox, chromium} from 'playwright';

test('register test', async() => {

    const browser:Browser=  await firefox.launch({headless:false});
    const page: Page =  await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const registerButton: Locator =  page.locator("//a[@class='btn btn-primary']");
    await registerButton.click();

    await page.locator("#input-firstname").fill("Naveen");
    await page.locator("#input-lastname").fill("Automation");
    await page.locator("#input-email").fill("deepakshi@yopmail.com");
    await page.locator("#input-telephone").fill("1234567890");
    await page.locator("#input-password").fill("playwright@123");
    await page.locator("#input-confirm").fill("playwright@123");
    await page.locator("//input[@name='agree']").check();
    await page.locator("//input[@value='Continue']").click();
    browser.close();

})

import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('locators test', async() =>{

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   
   //Using  page.locator(ID)
    const firstName: Locator = await page.locator("#input-firstname");
    const lastName: Locator = await page.locator("#input-lastname");

    await firstName.fill("Deepakshi");
    await lastName.fill("Zorawar");
    // const email: Locator = await page.locator("#input-email");
    // await email.fill("

//using page.locator(classname)

const logo: Locator = page.locator(".img-responsive");
console.log(await expect(logo).toBeVisible());

    // const email:Locator = page.locator('.form-control');
    // await email.fill("deepakshi@yopmail.com");
    // await new Promise(()=>{});
});


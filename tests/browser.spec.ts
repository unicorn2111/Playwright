import { test, Browser, Page, Locator, expect , BrowserContext} from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('browser test', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    //browser context way
    const browserContext: BrowserContext = await browser.newContext();
    const page1 : Page =  await browserContext.newPage();

    const browserContext_2: BrowserContext = await browser.newContext();
    const page2 : Page =  await browserContext_2.newPage();

    // const page: Page = await browser.newPage();

    // await browser: Browser =  await.chromium.launch({ headless: false, channel: 'chrome' });
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const email: Locator =  await page1.locator("#input-email");
    const password: Locator =  await page1.locator("#input-password");   
    const loginBtn: Locator =  await page1.locator("input[value='Login']");
    await email.fill("pwtest@opencart.com");
    await password.fill("playwright@123");

    await loginBtn.click();



    //browser 2

    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const email2: Locator =  await page2.locator("#input-email");
    const password2: Locator =  await page2.locator("#input-password");   
    const loginBtn2: Locator =  await page2.locator("input[value='Login']");
    await email2.fill("deepakshi@yopmail.com");
    await password2.fill("playwright@123");

    await loginBtn2.click();


    //prevent script from closing browser immediately
    await new Promise(()=>{});

})
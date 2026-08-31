
import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('locators test', async() =>{

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/");

    await new Promise(()=>{});
});


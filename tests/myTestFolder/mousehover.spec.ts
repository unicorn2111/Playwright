import { test, Browser, Page, Locator, expect , BrowserContext} from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Select based dopdown test', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    //browser context way
    const browserContext: BrowserContext = await browser.newContext();
    const page : Page =  await browserContext.newPage();
    await page.goto("https://www.bigbasket.com/", { waitUntil: 'domcontentloaded' });
    const category = page.locator("xpath=//button[@id='headlessui-menu-button-:Rld956:']//span[@class='Label-sc-15v1nk5-0 sc-dhKdcB jnBJRV ffLIFe'][normalize-space()='Shop by']");

    await category.click();

    await page.locator("a[href*='/cl/beverages/?nc=nb']").filter({visible:true}).hover();
  const teaLink =  page.locator('a[href="/pc/beverages/tea/?nc=nb"]');

    await teaLink.hover(); 
    await page.locator('text=Green Tea').click();




    

    await page.waitForTimeout(2000);
    //prevent script from closing browser immediately
    // await new Promise(()=>{});

}) 

function waitForTimeout(arg0: number) {
    throw new Error('Function not implemented.');
}

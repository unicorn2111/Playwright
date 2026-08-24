import { test, Browser, Page, Locator, expect , BrowserContext} from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Select based dopdown test', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    //browser context way
    const browserContext: BrowserContext = await browser.newContext();
    const page : Page =  await browserContext.newPage();

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
     const countryDropdown: Locator =  page.locator("#Contact_CountryCode");
     await countryDropdown.selectOption("India");
     await countryDropdown.selectOption({label: "India"});
     await countryDropdown.selectOption({index: 101});
    //  await countryDropdown.selectOption({value: "India"});
     await countryDropdown.selectOption({label: "India"});
    

    const allOptions = await page.$$('#Contact_CountryCode > option');
    console.log("Total options in dropdown are : " + allOptions.length);

    for (const option of allOptions) {
        const optionText = await option.textContent();
        // console.log(optionText);
        if(optionText==='Yemen'){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(2000);
    //prevent script from closing browser immediately
    // await new Promise(()=>{});

}) 
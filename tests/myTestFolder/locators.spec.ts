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
const logo: Locator =  page.locator(".img-responsive");
const logoExist = await logo.isEnabled();
console.log(logoExist);
// const logo: Locator = page.locator(".img-responsive");
// console.log(await expect(logo).toBeVisible());

    // const email:Locator = page.locator('#input-email');
    // await email.fill("deepakshi@yopmail.com");
    // const telephone:Locator = page.locator('input[type="tel"]');
    // await telephone.fill("1234567890");

    // const password: Locator =  page.locator("#input-password");
    // await password.fill("playwright@123");
    // const confirmPassword: Locator = page.locator('input[name="confirm"]');
    // await confirmPassword.fill("playwright@123");

    const header: Locator =  page.locator('text =Register Account');
    const headerExist =  await header.isEnabled();
    console.log(headerExist);

    const frgtPwd: Locator =  page.locator('text=Forgotten Password');
    const FrgtPwdLinkExist =  await frgtPwd.isEnabled();
    console.log(FrgtPwdLinkExist);

    const email_Input: Locator =  page.locator('input#input-email');
    email_Input.fill("dee.arora@yopmail.com");
    const emailExist = await email_Input.isEnabled();
    console.log(emailExist);

    const input_tel: Locator =  page.locator('input#input-telephone');
    input_tel.fill("1234567890");
    const tel_exist = await input_tel.isEnabled();
    console.log(tel_exist);

    const radioBtn: Locator =  page.locator('input[type="checkbox"]');
    await radioBtn.check();
    const radioBtnExist = await radioBtn.isChecked();
    console.log(radioBtnExist);

    // await new Promise(()=>{});
});


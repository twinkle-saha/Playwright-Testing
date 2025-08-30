import { expect } from 'playwright/test';
import {test} from '../fixtures/hooks-fixture'

test.use({storageState:
    {
        cookies:[],
        origins:[]
    }


})
test('Verify User cannot login with invalid password', async ({page,loginPage,gotoUrl,commonUtil})=>{
    const decryptedUsername = commonUtil.decryptData(process.env.USER_NAME as string)
    await loginPage.loginOrangeHrm(decryptedUsername,'admin1234');
    await expect (loginPage.loginErrorMessage).toHaveText('Invalid credentials')
    await page.pause();
})
test('Verify User cannot login with invalid username', async ({page,loginPage,gotoUrl,commonUtil})=>{
    const decryptedPassword = commonUtil.decryptData(process.env.PASSWORD as string)
    await loginPage.loginOrangeHrm('admin1',decryptedPassword);
    await expect (loginPage.loginErrorMessage).toHaveText('Invalid credentials')
    await page.pause();
})
test('Verify User cannot login with invalid username and Password', async ({page,loginPage,gotoUrl,commonUtil})=>{
    
    await loginPage.loginOrangeHrm('admin1','admin1234');
    await expect (loginPage.loginErrorMessage).toHaveText('Invalid credentials')
    await page.pause();
})

test('Logging with Valid Username and Password,using tags and visual testing integration',
    {tag:['@VISUAL','@UAT']},
    async({page,loginPage,gotoUrl,commonUtil,leftNavigationPage})=>{
        
        const decryptedUsername = commonUtil.decryptData(process.env.USER_NAME as string)
        const decryptedPassword = commonUtil.decryptData(process.env.PASSWORD as string) 
        await loginPage.loginOrangeHrm(decryptedUsername,decryptedPassword);
        await expect (leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrageHrmLogo.png')
        await expect (leftNavigationPage.leftNavigationPanel).toHaveScreenshot('LeftnavigationPanel.png')
})
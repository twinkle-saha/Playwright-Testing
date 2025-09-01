import { expect } from 'playwright/test';
import {test} from '../fixtures/hooks-fixture'


// test.use({storageState:
//     {
//         cookies:[],
//         origins:[]
//     }


// })
test('Verify User cannot login with invalid password', async ({page,gotoUrl,loginPage,commonUtil})=>{
    const decryptedUsername = commonUtil.decryptData(process.env.USER_NAME as string)
    await loginPage.loginOrangeHrm(decryptedUsername,'admin1234');
    await expect (loginPage.loginErrorMessage).toHaveText('Invalid credentials')
    
})
test('Verify User cannot login with invalid username', async ({page,loginPage,commonUtil,gotoUrl})=>{
    const decryptedPassword = commonUtil.decryptData(process.env.PASSWORD as string)
    await loginPage.loginOrangeHrm('admin1',decryptedPassword);
    await expect (loginPage.loginErrorMessage).toHaveText('Invalid credentials')
    
})
test('Verify User cannot login with invalid username and Password', async ({page,loginPage,commonUtil,gotoUrl})=>{
    
    await loginPage.loginOrangeHrm('admin1','admin1234');
    await expect (loginPage.loginErrorMessage).toHaveText('Invalid credentials')
    
})

test('Logging with Valid Username and Password,using tags and visual testing integration',
    {tag:['@VISUAL','@UAT']},
    async({page,loginPage,commonUtil,leftNavigationPage,gotoUrl})=>{
        
        const decryptedUsername = commonUtil.decryptData(process.env.USER_NAME as string)
        const decryptedPassword = commonUtil.decryptData(process.env.PASSWORD as string) 
        await loginPage.loginOrangeHrm(decryptedUsername,decryptedPassword);
        await expect (leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrageHrmLogo.png')
        await expect (leftNavigationPage.leftNavigationPanel).toHaveScreenshot('LeftnavigationPanel.png')
})
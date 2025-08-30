import { expect } from 'playwright/test';
import {test} from '../fixtures/common-fixture'

test('Global setup for auto login',async({page,loginPage,commonUtil,dashboardPage})=>{
    const decryptedUsername = commonUtil.decryptData(process.env.USER_NAME as string);
  const decryptedPassword = commonUtil.decryptData(process.env.PASSWORD as string);
  await loginPage.gotoOrangeHrm();
   await loginPage.loginOrangeHrm(decryptedUsername,decryptedPassword)
   await page.waitForURL(process.env.BASE_URL+'web/index.php/dashboard/index')
   await expect(dashboardPage.dashboardLocator).toBeVisible();
   await page.context().storageState({
    path:'./playwright/.auth/auth.json'
   })
})
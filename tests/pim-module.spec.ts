import { expect } from 'playwright/test';
import { test } from '../fixtures/hooks-fixture'
import pimModuleData from '../data/ui-data/pim-module-data.json'

// //manually logging in without setup file.
test.beforeEach('Login to the Application', async ({ page, loginPage, commonUtil }) => {
   const decryptedUsername = commonUtil.decryptData(process.env.USER_NAME as string)
   const decryptedPassword = commonUtil.decryptData(process.env.PASSWORD as string)
   console.log(`Decrypted Username: ${decryptedUsername}`);
   console.log(`Decrypted Password: ${decryptedPassword}`);
   await loginPage.gotoOrangeHrm();
   await loginPage.loginOrangeHrm(decryptedUsername, decryptedPassword);
   await page.pause();
})
test('Verify that a new Employee is successfully Created under PIM Module',
   { tag: ['@UAT'] }, async ({ page, leftNavigationPage, pimPage }) => {
      await test.step('Open PIP Module and assert', async () => {
         await leftNavigationPage.openPimModule();
         await expect(leftNavigationPage.pimLocator).toBeVisible();
      })
      await test.step('Go to Employee Page , Add Employee and assert', async () => {
         await pimPage.gotoAddEmployeePage();
         await pimPage.addEmployee(pimModuleData.first_name, pimModuleData.middle_name, pimModuleData.last_name)

         await expect(pimPage.newEmployeeNAmeHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
         console.log('New Employee Created Successfully, EmpName:' + `${pimModuleData.first_name} ${pimModuleData.last_name}`)
      })

   })
test.afterEach('Logout',async({page,logoutPage})=>{
   await logoutPage.Logout();
   await page.pause();
})

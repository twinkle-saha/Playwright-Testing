import { expect } from 'playwright/test';
import { test } from '../fixtures/hooks-fixture'
import pimModuleData from '../data/pim-module-data.json'

test('Verify that a new Employee is successfully Created under PIM Module', {tag:['@UAT']},async ({ page, leftNavigationPage,gotoUrl,logout,pimPage }) => {
   await test.step('Open PIP Module and assert',async()=>{
    await leftNavigationPage.openPimModule();
    await expect(leftNavigationPage.pimLocator).toBeVisible();
   })
   await test.step('Go to Employee Page , Add Employee and assert',async()=>{
    await pimPage.gotoAddEmployeePage();
    await pimPage.addEmployee(pimModuleData.first_name,pimModuleData.middle_name,pimModuleData.last_name)
    
    await expect(pimPage.newEmployeeNAmeHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
   })
    
   
})
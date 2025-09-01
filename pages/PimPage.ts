import {Locator, Page} from  '@playwright/test'

export class PimPage{
   readonly page : Page;
   readonly addEmployeeLocator : Locator; 
   readonly firstNameLocator : Locator;
   readonly middleNameLocator: Locator;
   readonly lastNameLocator : Locator;
   readonly employeeCodeLocator : Locator;
   readonly saveButton : Locator;
   readonly newEmployeeNAmeHeading : Locator;

   constructor(page : Page){
    this.page = page;
    this.addEmployeeLocator = page.getByText('Add Employee');
    this.firstNameLocator = page.locator('[name="firstName"]');
     this.middleNameLocator = page.locator('[name="middleName"]');
    this.lastNameLocator = page.locator('[name="lastName"]')
    this.employeeCodeLocator = page.locator('.oxd-input.oxd-input--active').last();
    this.saveButton = page.getByRole('button',{name:'Save'})
    this.newEmployeeNAmeHeading = page.locator('.orangehrm-edit-employee-name');
   }

   async gotoAddEmployeePage(){
    await this.addEmployeeLocator.click();
   }

   async addEmployee(firstName: string,middleName:string,lastName:string){
    await this.firstNameLocator.fill(firstName);
    await this.lastNameLocator.fill(lastName);
    await this.middleNameLocator.fill(middleName);
    await this.employeeCodeLocator.fill(`EMP-${Math.floor(Math.random()*1000)}`);
    await this.saveButton.click()
   }
}
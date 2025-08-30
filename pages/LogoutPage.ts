import  { Locator, Page } from '@playwright/test'
export class LogoutPage{
    readonly page : Page
    readonly userManeuButton : Locator
    readonly logoutButton : Locator

    constructor(page : Page){
        this.page = page
        this.userManeuButton = page.locator('.oxd-userdropdown-name');
        this.logoutButton = page.getByRole('menuitem',{name: 'Logout'})
    }

    async Logout(){
        await this.userManeuButton.click();
        await this.logoutButton.click();
    }
}
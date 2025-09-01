import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly userNameInput :Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    readonly loginErrorMessage: Locator;

    constructor (page:Page){
        this.page = page;
        this.userNameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.loginButton = page.getByRole('button',{name:'Login'});
        this.loginErrorMessage = page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text');
    }

    //To open url in browser
    async gotoOrangeHrm(){
       // await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`)
       await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    /** 
    * To login into the application
     * @param userName
     * @param Password
     */
    async loginOrangeHrm(username: string, Password:string){
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(Password);
        await this.loginButton.click();
    }
}
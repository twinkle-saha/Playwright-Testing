import {Locator, Page} from '@playwright/test'

export class LeftNavigation{
    readonly page: Page;
    readonly pimLocator : Locator;
    readonly pimHeader: Locator
    readonly orangeHrmLogo : Locator
    readonly leftNavigationPanel : Locator

    constructor(page : Page){
        this.page = page;
        this.pimLocator = page.getByRole('link',{name:'PIM'})
        this.pimHeader = page.locator('..oxd-topbar-header-breadcrumb')
        this.orangeHrmLogo = page.locator('.oxd-brand-banner')
        this.leftNavigationPanel = page.locator('.oxd-sidepanel-body')


    }

    async openPimModule(){
       await this.pimLocator.click();
    }
}
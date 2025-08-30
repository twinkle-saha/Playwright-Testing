import {Locator, Page} from '@playwright/test'

export class DashboardPage{
    readonly page: Page;
    readonly dashboardLocator : Locator

    constructor(page:Page){
        this.page = page;
        this.dashboardLocator = page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
    }
}
import {test as baseTest,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { LogoutPage } from "../pages/LogoutPage";
import { LeftNavigation } from "../pages/LeftNavigationPage";
import { PimPage } from "../pages/PimPage";

type PomFixturesType={
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
    logoutPage : LogoutPage;
    leftNavigationPage: LeftNavigation;
    pimPage : PimPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage : async({page},use)=>{
        await use(new LoginPage(page));
    },
    dashboardPage : async({page},use)=>{
        await use(new DashboardPage(page))
    },
    logoutPage : async({page},use)=>{
        await use(new LogoutPage(page))
    },
    leftNavigationPage : async({page},use)=>{
        await use(new LeftNavigation(page))
    },
    pimPage : async({page},use)=>{
        await use(new PimPage(page))
    }
})  
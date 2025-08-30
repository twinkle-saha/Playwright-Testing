import { test as baseTest} from '../fixtures/common-fixture'
import { LogoutPage } from '../pages/LogoutPage'

type HooksFixture ={
    gotoUrl : any
    logout :any
}

export const test = baseTest.extend<HooksFixture>({
    gotoUrl : async({loginPage},use)=>{
        await loginPage.gotoOrangeHrm();
        await use();
    },
    logout : async({logoutPage},use)=>{
        await use();
        await logoutPage.Logout();
    }
})
import {test} from '../fixtures/hooks-fixture'

// test.beforeEach('Before Each hook',async({loginPage})=>{
//    await loginPage.gotoOrangeHrm(); 
// })

// test.afterEach('After each hook',async({logoutPage})=>{
//   await logoutPage.Logout();
// })
test.skip('Temp test',async({page,loginPage,commonUtil,gotoUrl,logout})=>{
   // const commonUtil = new CommonUtil() -- no need to import this as we already created fixture file for this and fixture file in imported
  console.log(process.env.BASE_URL)

  /* this encryption is done only once and the data is stored in the environment file*/ 
  // const encryptedUsername= commonUtil.encryptData(process.env.USER_NAME as string)
  // const encryptedPassword = commonUtil.encryptData(process.env.PASSWORD as string)
  // console.log("Encrypted Username: "+encryptedUsername)
  // console.log("EncryptedPassword: "+ encryptedPassword)

  // const decryptedUsername = commonUtil.decryptData(process.env.USER_NAME as string);
  // const decryptedPassword = commonUtil.decryptData(process.env.PASSWORD as string);
 // console.log("DecruptedUsername: "+decryptedUsername);

  // console.log("DecruptedPassword: "+decryptedPassword);
   await loginPage.gotoOrangeHrm();
  //  await loginPage.loginOrangeHrm(decryptedUsername,decryptedPassword)
  console.log(await page.title())
})
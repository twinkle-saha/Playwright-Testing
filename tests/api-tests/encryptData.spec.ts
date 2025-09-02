import {test} from '../../fixtures/hooks-fixture'



test.skip('Generating Encrypted Data for Api',async({page,commonUtil})=>{
    const encryptedUsername =  commonUtil.encryptData(process.env.API_AUTH_USERNAME!)
    const encryptedPassword =  commonUtil.encryptData(process.env.API_AUTH_PASSWORD!)
   console.log("Encrypted Username: "+encryptedUsername, "Encrypted PAssword: "+encryptedPassword )
})
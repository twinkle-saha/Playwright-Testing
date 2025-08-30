import {test as basetest} from './pom-fixture'
import CommonUtil from '../utils/commonUtil'

type commonFixtureType ={
    commonUtil :CommonUtil
}

export const test = basetest.extend<commonFixtureType>({
    commonUtil: async({},use)=>{
        await use(new CommonUtil());
    }
})

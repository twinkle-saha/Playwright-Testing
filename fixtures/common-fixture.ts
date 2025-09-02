import {test as basetest} from './pom-fixture'
import CommonUtil from '../utils/commonUtil'
import { CommonApiUtil } from '../utils/commonApiUtil'

type commonFixtureType ={
    commonUtil :CommonUtil
    commonApiUtil :CommonApiUtil
}

export const test = basetest.extend<commonFixtureType>({
    commonUtil: async({},use)=>{
        await use(new CommonUtil());
    },
    commonApiUtil :async({request},use)=>{
        await use(new CommonApiUtil(request));
    }
})

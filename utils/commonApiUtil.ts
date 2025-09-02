import { APIRequestContext } from "playwright/test";
import apiPathData from "../data/api-data/api-path-data.json";
import CommonUtil from "./commonUtil";
export class CommonApiUtil {
    private request: APIRequestContext

    constructor(request: APIRequestContext) {
        this.request = request;

    }
    public async createToken() {
        const commonUtil = new CommonUtil();
        const decryptedUsername = commonUtil.decryptData(process.env.API_AUTH_USERNAME!)
        const decryptedPassword = commonUtil.decryptData(process.env.API_AUTH_PASSWORD!)
        console.log(decryptedUsername ,decryptedPassword)

        const createToken = await this.request.post(apiPathData.auth_path, {
            data: {
                "username": decryptedUsername,
                "password": decryptedPassword
            }
        })
        const createTokenJsonResp = await createToken.json();
        return createTokenJsonResp.token;
    }
}

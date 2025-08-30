
import cryptoJs from 'crypto-js'
export default class CommonUtil{
    private sectet_key:string;
    constructor(){
        if(process.env.SECRET_KEY){
            this.sectet_key=process.env.SECRET_KEY
        }
        else{
            throw new Error('SECRET KEY is not defined')
        }
    }

    public encryptData(data:string){
        const encryptedData = cryptoJs.AES.encrypt(data,this.sectet_key).toString();
        return encryptedData;
    }

    public decryptData(encryptedData:string){
        const bytes = cryptoJs.AES.decrypt(encryptedData,this.sectet_key);
        const decryptedData = bytes.toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }
}
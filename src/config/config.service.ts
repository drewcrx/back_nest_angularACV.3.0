import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly envConfig: {[key:string]:string}
    constructor(){
        const isDevelopmentEnv= process.env.NODE_ENV !== 'production'
        if (isDevelopmentEnv){
            const envieFilePath= __dirname +'/../../.env.development'
            const existsPath = fs.existsSync(envieFilePath)
            if(!existsPath){
                console.log('.env.development no existe DEVELOPMENT')
                process.exit(0)
            }
            this.envConfig=parse(fs.readFileSync(envieFilePath))
        }
        else
        {
            const envieFilePath= __dirname +'/../../../.env.production'
            const existsPath = fs.existsSync(envieFilePath)
            if(!existsPath){
                console.log('.env.development no existe PRODUCTION')
                process.exit(0)
            }
            this.envConfig=parse(fs.readFileSync(envieFilePath))
        }
    }
    get(key: string):string{
        return this.envConfig[key];
    }
}

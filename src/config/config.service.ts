import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly envConfig: {[key:string]:string}

    constructor(){
        
        const env =process.env.NODE_ENV || 'development'
        const envieFilePath= `${__dirname}/../../../.env.${env}`
        const existsPath = fs.existsSync(envieFilePath)
            if(!existsPath){
                console.log(`.env.${process.env.NODE_ENV} no existe`)
                process.exit(0)
            }
            this.envConfig=parse(fs.readFileSync(envieFilePath))
        }
    get(key: string):string{
        return this.envConfig[key];
    }
}

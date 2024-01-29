import { Injectable,Req, Query, Param} from '@nestjs/common';
import { Request } from "express";
import { url } from 'inspector';
@Injectable()
export class CatService {
    create(): string {
        return 'The Post action add a new cat ';
    }
    findAll(): string {
        return 'this action returns all cats'
    }  

    getDocs(str:string)
    {
        if(str=='redirect')
        {
            return {url:'http://localhost:4000/api/cats'}
        }
    }

    addHeaders()
    {
    return 'addheaders successfully'
    }
    findOne(@Param() params:any):string{
        console.log((params.id));
        return `this action return a #${params.id} cat`
        
    }


}

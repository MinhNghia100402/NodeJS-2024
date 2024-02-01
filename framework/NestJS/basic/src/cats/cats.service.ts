import { Injectable,Req, Query, Param} from '@nestjs/common';
import { Request } from "express";
import { url } from 'inspector';
import { Cat } from './interfaces/cat.interfaces';
import { DogService } from 'src/dog/dog.service';
// @Injectable()

export class CatService {
    cats: any[];


    // define cat 

    constructor(
        private readonly dogService: DogService
    )
    {
        this.cats = [];
    }


    
    create(cat) {
        this.cats.push(cat);
    }

    findAll() {
        return this.cats;
    }


    cr(): string {
        
        return 'post method '
    }
    fAll(): string {
        return 'this action returns all cats'
    }  

    getDocs(str:string)
    {
        if(str=='redirect')
        {
            return {url:'http://localhost:4000/cats/api/cats'}
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

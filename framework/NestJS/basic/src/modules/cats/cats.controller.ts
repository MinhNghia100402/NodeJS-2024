import { Controller,Bind, Get, HttpCode, Param, Post, Query, Redirect, Req } from "@nestjs/common";
import { Request } from "express";
import { get, request } from "http";
import { CatService } from "./cats.service";

@Controller()
export class catsController {

    constructor(private readonly catsService: CatService){}

    @Post('/api/create')
    // add status code after HTTP method 
    @HttpCode(200)
    create(): string{
        return this.catsService.create()
    }
    
    @Get('/api/cats')
    @HttpCode(200)
    // import request from express : provides access to the request object by add the @Req() -- install @types/express package
    findAll(@Req() request:Request): string{
        return this.catsService.findAll()
    }

    // add headers to the request object 
    @Get('/api/addheaders')
    @HttpCode(200)
    addHeader():string{
        
        return this.catsService.addHeaders()
    }

    //redirection for different routers 

    @Get('/api/docs')
    @Redirect('http://localhost:4000/api/addheaders', 302)
    getDocs(): void{
         this.catsService.getDocs('redirect')
    }


    //router parameters

    @Get('/cats/:id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }


    // sub-domain routing

    // asynch 

    @Get('/api/asynch/')
    async find() : Promise<any> {
            return [1,2,3,4]
    }

}

// create controller using cmd : nest g controller [name]
// the @Get HTTP request method before the findAll method 
// import request from express : provides access to the request object by add the @Req() -- install @types/express package
// add status code after HTTP method

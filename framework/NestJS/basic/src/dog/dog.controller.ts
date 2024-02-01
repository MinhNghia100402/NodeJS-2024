import { Controller, Bind, Get, HttpCode, Param, Post, Query, Redirect, Req, Body } from "@nestjs/common";

import { Request } from "express";
import { get, request } from "http";
import { DogService } from "./dog.service";
import { CreateCatDto } from "./dto/dog.dto";
// import { LoggerMiddleware } from "src/middleware/logger.middleware";

@Controller('dogs')

export class DogController {

    constructor(private readonly catsService: DogService){}

    @Post('/api/create')
    // add status code after HTTP method 
    @HttpCode(200)
    cr(): string{
        return this.catsService.cr()
    }
    
    
    @Get('/api/cats')
    @HttpCode(200)
    // import request from express : provides access to the request object by add the @Req() -- install @types/express package
    fAll(@Req() request:Request): string{
        return this.catsService.fAll()
    }

    // add headers to the request object 
    @Get('/api/addheaders')
    @HttpCode(200)
    addHeader():string{
        
        return this.catsService.addHeaders()
    }

    //redirection for different routers 

    @Get('/api/docs')
    @Redirect('http://localhost:4000/cats/api/cats', 302)
    getDocs(): void{
         this.catsService.getDocs('aaaa')
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




    //prividers 

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    // @Get()
    // async findAll(): Promise<Cat[]> {
    //     return this.catsService.findAll();
    // }
}

// create controller using cmd : nest g controller [name]
// the @Get HTTP request method before the findAll method 
// import request from express : provides access to the request object by add the @Req() -- install @types/express package
// add status code after HTTP method
// cl0gatr
import { Module,MiddlewareConsumer,NestModule } from "@nestjs/common";
import { CatService } from "./cats.service";
import { catsController } from "./cats.controller";
import { DogModule } from "src/dog/dog.module";


@Module({
    imports: [DogModule],
    controllers: [catsController],
    providers: [CatService],
    exports: [CatService]
})
export class catsModule { 
    // configure(consumer: MiddlewareConsumer):
    // {
    //     consumer
    //     .apply(LoggerMiddleware)
    //     .forRoutes(catsController);
    // }
}
import { Module,MiddlewareConsumer,NestModule } from "@nestjs/common";
import { DogService } from "./dog.service";
import { DogController } from "./dog.controller";


@Module({
    controllers: [DogController],
    providers: [DogService],
    exports: [DogService]
})
export class DogModule { 
    // configure(consumer: MiddlewareConsumer):
    // {
    //     consumer
    //     .apply(LoggerMiddleware)
    //     .forRoutes(catsController);
    // }
}
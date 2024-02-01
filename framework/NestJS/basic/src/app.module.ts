import { Module, NestModule, MiddlewareConsumer, Logger, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { catsController } from './cats/cats.controller';
import { CatService } from './cats/cats.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { catsModule } from './cats/cats.module';
import { DogModule } from './dog/dog.module';
import { DogController } from './dog/dog.controller';
import path from 'path';
// import { CatService } from './modules/cats/cats.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';
import { Department } from './employees/entities/department.entity';
import { EmployeesController } from './employees/employees.controller';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'nghialee',
      password: '1',
      database: 'qlnv',
      entities: [Employee, Department],
      synchronize: false, // set false for synchronize so as not to lose data
    }),
    EmployeesModule,
    catsModule, 
    DogModule,
    ],
  controllers: [AppController],
  providers: [AppService],  // khai bao providers 


})

// export class AppModule  implements NestModule{
//     configure(consumer: MiddlewareConsumer) {
//       consumer
//       .apply(LoggerMiddleware)
//       .forRoutes('cats')
//     }
// }

export class AppModule  {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes(catsController); // tranfer for ForRoutes

    consumer
    .apply(LoggerMiddleware)
      .forRoutes({ path:'cats/api/cats', method: RequestMethod.GET})

    consumer
    .apply(LoggerMiddleware)
    .forRoutes(DogController);

    consumer
    .apply(LoggerMiddleware)
      .forRoutes(EmployeesController);

  }
}


// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({path:'cats',method:RequestMethod.GET}); // tranfer for ForRoutes

//     consumer
//   }
// }

// multiple middlewares

// consumer.apply(cors(), helmet(), logger()).forRoutes(CatsController)




import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { catsController } from './modules/cats/cats.controller';
import { CatService } from './modules/cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, catsController],
  providers: [AppService,CatService],
})

export class AppModule {}

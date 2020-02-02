import { Module, UseFilters } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost/nestJs')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

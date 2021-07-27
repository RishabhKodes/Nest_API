import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './item.service';
import { ItemSchema } from './schemas/item.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
    LoggerModule,
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}

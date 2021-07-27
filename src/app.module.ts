import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import configuration from './config/configuration';
import { LoggerModule } from './logger/logger.module';
import { ItemSchema } from './items/schemas/item.schema';

@Module({
  imports: [
    LoggerModule,
    ItemsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `${configService.get('database.uri')}`,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
    LoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

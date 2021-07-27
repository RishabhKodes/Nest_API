import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemDTO } from './dto/item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './item.service';
import { LoggerService } from '../logger/logger.service';

@Controller('items')
export class ItemsController {
  constructor(
    private logger: LoggerService,
    private readonly itemsService: ItemsService,
  ) {}

  @Get()
  async findAll(): Promise<Item[]> {
    this.logger.debug('Get All Items Endpoint');
    return this.itemsService.findAll();
  }

  @Get(':id')
  findbyId(@Param() param): Promise<Item> {
    this.logger.debug('Find by id endpoint');
    return this.itemsService.findById(param.id);
  }

  @Post()
  create(@Body() itemDTO: ItemDTO): Promise<Item> {
    this.logger.debug('Add item endpoint');
    return this.itemsService.create(itemDTO);
  }

  @Put(':id')
  async update(@Param() param, @Body() itemDTO: ItemDTO): Promise<Item> {
    this.logger.debug('Update item endpoint');
    return this.itemsService.update(param.id, itemDTO);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<Item> {
    this.logger.debug('Delete Item endpoint.');
    return this.itemsService.delete(param.id);
  }
}

import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item-interface';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAllItems(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findItem(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id);
  }
  @Post()
  createItem(@Body() itemBody: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(itemBody);
  }
  @Put(':id')
  updateItem(@Param() param, @Body() itemBody: CreateItemDto): Promise<Item> {
    return this.itemsService.updateItem(param.id, itemBody);
  }
  @Delete(':id')
  deleteItem(@Param() param): Promise<Item> {
    return this.itemsService.deleteItem(param.id);
  }
}

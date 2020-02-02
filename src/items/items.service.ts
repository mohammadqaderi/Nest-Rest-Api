import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item-interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item-dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }
  async updateItem(id: string, item: CreateItemDto): Promise<Item> {
    return await this.itemModel.updateOne(
      {
        _id: id,
      },
      {
        $set: item,
      },
    );
  }
  async deleteItem(id: string): Promise<Item> {
    return await this.itemModel.deleteOne({
      _id: id,
    });
  }
}

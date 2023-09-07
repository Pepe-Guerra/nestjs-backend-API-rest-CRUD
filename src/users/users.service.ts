import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('UserModel') private userModule: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = await this.userModule.create(createUserDto);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async findAllUser(): Promise<User[]> {
    const allUsers = await this.userModule.find();
    return allUsers;
  }

  async findOneUser(id: string): Promise<User> {
    try {
      return await this.userModule.findById(id);
    } catch (error) {
      throw new NotFoundException(`Usuario con ID ** ${id} ** no existe`);
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      return this.userModule.findByIdAndUpdate(id, updateUserDto, {
        new: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async removeUser(id: string): Promise<User> {
    try {
      return await this.userModule.findByIdAndDelete(id);
    } catch (error) {
      throw new NotFoundException(`Usuario con ID ** ${id} ** no existe`);
    }
  }
}

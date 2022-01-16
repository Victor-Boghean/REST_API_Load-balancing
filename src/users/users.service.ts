import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getUsers() {
    try {
      const user = await this.userRepository.findAll();
      return { data: user };
    } catch (err: any) {
      return { error: err };
    }
  }

  async createUser(dto: CreateUserDto) {
    try {
      const user = await this.userRepository.create(dto);
      return { data: user };
    } catch (err: any) {
      return { error: err };
    }
  }

  async updateUser(id: string, dto: UpdateUserDto) {
    try {
      const user = await this.userRepository.update(dto, { where: { id } });
      return { data: user };
    } catch (err: any) {
      return { error: err };
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.userRepository.destroy({ where: { id } });
      return { data: user };
    } catch (err: any) {
      return { error: err };
    }
  }
}

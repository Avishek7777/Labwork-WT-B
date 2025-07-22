import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.age = createUserDto.age;
    user.gender = createUserDto.gender;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  viewUser(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.name = updateUserDto.name ?? '';
    user.age = updateUserDto.age ?? 0;
    user.email = updateUserDto.email ?? 'example@email.com';
    user.username = updateUserDto.username ?? '';
    user.password = updateUserDto.password ?? '';
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

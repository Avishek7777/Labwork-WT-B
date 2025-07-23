import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ninja } from './entity/ninjas.entity';
import { Repository } from 'typeorm';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
  constructor(
    @InjectRepository(Ninja)
    private ninjaRepo: Repository<Ninja>,
  ) {}

  create(createNinjaDto: CreateNinjaDto): Promise<Ninja> {
    const ninja = this.ninjaRepo.create(createNinjaDto);
    return this.ninjaRepo.save(ninja);
  }

  findAll(): Promise<Ninja[]> {
    return this.ninjaRepo.find();
  }
  async findOne(id: number): Promise<Ninja> {
    const ninja = await this.ninjaRepo.findOneBy({ id });
    if (!ninja) {
      throw new Error(`Ninja with id ${id} not found`);
    }
    return ninja;
  }
  async update(id: number, updatNinjaDto: UpdateNinjaDto): Promise<Ninja> {
    await this.ninjaRepo.update(id, updatNinjaDto);
    return this.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.ninjaRepo.delete(id);
  }
  async attachCv(id: number, filename: string): Promise<any> {
    const ninja = await this.ninjaRepo.findOneBy({ id });
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    ninja.cv = filename;
    return this.ninjaRepo.save(ninja);
  }
}

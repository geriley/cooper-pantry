import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pantry } from '../../entities';
import { Repository } from 'typeorm';

@Injectable()
export class PantryRepoService {
    constructor(
        @InjectRepository(Pantry)
        private pantryRepo: Repository<Pantry>,
    ) { }

    public async findAll(): Promise<Pantry[]> {
        return this.pantryRepo.find();
    }

    public async add(pantry: Pantry) {
        return this.pantryRepo.save(pantry);
    }

    public async getById(id: number): Promise<Pantry> {
        return this.pantryRepo.findOne(id);
    }
}
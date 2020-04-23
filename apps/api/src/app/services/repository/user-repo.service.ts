import { User } from '../../entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepoService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) { }

    public async getById(id: string): Promise<User> {
        return this.userRepo.findOne(id, { relations: ['residentialAddress', 'staffedPantry'] });
    }

    public async findAll(): Promise<User[]> {
        return this.userRepo.find({ relations: ['residentialAddress', 'staffedPantry'] });
    }

    public async add(pantry: User) {
        return this.userRepo.save(pantry);
    }
}
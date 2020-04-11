import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SurveyResponse } from '../../entities';

@Injectable()
export class SurveyResponseRepoService {
    constructor(
        @InjectRepository(SurveyResponse)
        private pantryRepo: Repository<SurveyResponse>,
    ) { }

    public async findAll(): Promise<SurveyResponse[]> {
        return this.pantryRepo.find();
    }

    public async add(pantry: SurveyResponse) {
        return this.pantryRepo.save(pantry);
    }
}
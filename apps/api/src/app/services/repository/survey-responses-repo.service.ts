import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { SurveyResponse } from '../../entities';
import { ISurveyResponseCriteria } from '../interfaces';

@Injectable()
export class SurveyResponseRepoService {
    constructor(
        @InjectRepository(SurveyResponse)
        private pantryRepo: Repository<SurveyResponse>,
    ) { }

    public async findAll(criteria: ISurveyResponseCriteria): Promise<SurveyResponse[]> {
        if (criteria.userIds) {
            return this.pantryRepo.find({
                where: {
                    userId: In(criteria.userIds)
                }
            });
        } else return this.pantryRepo.find();
    }

    public async add(pantry: SurveyResponse) {
        return this.pantryRepo.save(pantry);
    }
}
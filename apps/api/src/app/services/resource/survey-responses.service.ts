import { Injectable } from '@nestjs/common';
import { SurveyResponseRepoService } from '../repository';
import { IPayload } from '@cooper/api-interfaces';

@Injectable()
export class SurveyResponseResourceService {
    constructor(private repo: SurveyResponseRepoService) { }
    public addBotSurveyResponse(response: any) {
        const entity = { id: undefined, response: response };
        return this.repo.add(entity);
    }

    public async get(): Promise<IPayload<any>> {
        const entities = await this.repo.findAll();
        return {
            data: entities.map((e) => ({
                type: 'survey-response',
                id: e.id.toString(),
                attributes: { ...e.response }
            }))
        };
    }
}
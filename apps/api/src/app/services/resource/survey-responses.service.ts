import { CooperResourceType, IPayload, ISurveyScoreDTO } from '@cooper/api-interfaces';
import { Injectable } from '@nestjs/common';
import { ITwilioAutopilotResponse } from '../../models';
import { SurveyScoreService } from '../helper';
import { ISurveyResponseCriteria } from '../interfaces';
import { SurveyResponseRepoService } from '../repository';

@Injectable()
export class SurveyResponseResourceService {
    constructor(private repo: SurveyResponseRepoService, private helper: SurveyScoreService) { }
    public addBotSurveyResponse(response: string) {
        const response2: ITwilioAutopilotResponse = JSON.parse(response);
        const entity = { id: undefined, userId: parseInt(response2.twilio.chat.From, 10), response: response };
        return this.repo.add(entity);
    }

    public async getScores(criteria: ISurveyResponseCriteria): Promise<IPayload<ISurveyScoreDTO>> {
        const entities = await this.repo.findAll(criteria);
        return {
            data: entities.map((e) => {
                const response: ITwilioAutopilotResponse = JSON.parse(e.response);
                const task = Object.keys(response.twilio.collected_data)[0];
                const answers = response.twilio.collected_data[task].answers;
                const score = this.helper.calculate(task, answers);
                return {
                    type: CooperResourceType.SurveyResponse,
                    id: e.id.toString(),
                    attributes: {
                        ...score
                    },
                    relationships: {
                        'user': { id: e.userId.toString(), type: CooperResourceType.User }
                    }
                };
            })
        }
    }
}
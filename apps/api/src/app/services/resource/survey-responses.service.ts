import { Injectable } from '@nestjs/common';
import { SurveyResponseRepoService } from '../repository';
import { IPayload, ISurveyScoreDTO, CooperResourceType, SurveyTypeDTO, SurveyResultLevel } from '@cooper/api-interfaces';
import { ITwilioAutopilotResponse } from '../../models';
import { SurveyScoreService } from '../helper';

@Injectable()
export class SurveyResponseResourceService {
    constructor(private repo: SurveyResponseRepoService, private helper: SurveyScoreService) { }
    public addBotSurveyResponse(response: string) {
        console.log(response);
        const response2: ITwilioAutopilotResponse = JSON.parse(response);
        console.log(response2);
        const entity = { id: undefined, userId: parseInt(response2.twilio.chat.From, 10), response: response };
        return this.repo.add(entity);
    }

    public async getScores(): Promise<IPayload<ISurveyScoreDTO>> {
        const entities = await this.repo.findAll();
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
                        'user': {
                            type: CooperResourceType.User, id: e.userId ? e.userId.toString() : undefined,
                        }
                    }
                };
            })
        }
    }

}
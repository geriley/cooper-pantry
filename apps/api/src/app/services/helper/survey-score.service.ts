import { Injectable } from '@nestjs/common';
import { IAutopilotAnswers } from '../../models/autopilot.model';
import { SurveyTypeDTO, SurveyResultLevel, ISurveyScoreDTO } from '@cooper/api-interfaces';

export enum SurveyTask {
    ShortFoodSecurityTask = 'short_fss_answers'
}

@Injectable()
export class SurveyScoreService {
    public calculate(task: string, answers: IAutopilotAnswers): ISurveyScoreDTO {
        switch(task) {
            case SurveyTask.ShortFoodSecurityTask: {
                return this.calcShortFormFSS(answers)
            }
            default: {
                return { 
                    score: 0,
                    surveyResultLevel: SurveyResultLevel.Info,
                    surveyType: undefined,
                };
            }
        }
    }

    private calcShortFormFSS(answers: IAutopilotAnswers): ISurveyScoreDTO {
        const affirmativeAnswers = ['yes', 'often', 'sometimes'];
        const shortFoodSecurityScore = [...Object.values(answers)].filter((a) => affirmativeAnswers.some((aa) => a.answer.toLowerCase())).length;
        const taskAttributes: ISurveyScoreDTO = {
            surveyType: SurveyTypeDTO.ShortFoodSecurity,
            score: shortFoodSecurityScore,
            surveyResultLevel: (shortFoodSecurityScore >= 5)
                ? SurveyResultLevel.Critical
                : (shortFoodSecurityScore >= 2 ? SurveyResultLevel.Warning
                    : SurveyResultLevel.Info)
        };
        return taskAttributes;
    }
}
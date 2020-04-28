import { IPayload, ISurveyScoreDTO } from '@cooper/api-interfaces';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { SurveyResponseResourceService } from '../services/resource';

@Controller('survey-responses')
export class SurveyResponsesController {
    constructor(private service: SurveyResponseResourceService) { }

    @Post()
    @ApiBody({})
    public async post(@Body() response: { Memory: string }): Promise<{ actions: any[] }> {
        this.service.addBotSurveyResponse(response.Memory);
        return Promise.resolve({
            actions: [
                {
                    redirect: {
                        uri: "task://complete_survey"
                    }
                }
            ]
        });
    }

    @Get()
    public get(): Promise<IPayload<ISurveyScoreDTO>> {
        return this.service.getScores({ });
    }
}
import { Controller, Post, Body, Get } from '@nestjs/common';
import { SurveyResponseResourceService } from '../services/resource';
import { IPayload } from '@cooper/api-interfaces';
import { ITwilioAutopilotResponse } from '../models/autopilot.model';

@Controller('survey-responses')
export class SurveyResponsesController {
    constructor(private service: SurveyResponseResourceService) { }
    @Post()
    public async post(@Body() response: { Memory: string }): Promise<{ actions: any[] }> {
        console.log(response);
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
    public get(): Promise<IPayload<any>> {
        return this.service.getScores();
    }
}
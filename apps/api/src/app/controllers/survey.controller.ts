import { Controller, Post, Body, Get } from '@nestjs/common';
import { SurveyResponseResourceService } from '../services/resource';
import { IPayload } from '../common';

@Controller('survey-responses')
export class SurveyResponsesController {
    constructor(private service: SurveyResponseResourceService) { }
    @Post()
    public async post(@Body() response: any): Promise<{ actions: any[] }> {
        this.service.addBotSurveyResponse(response);
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
        return this.service.get();
    }
}
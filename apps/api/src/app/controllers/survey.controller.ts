import { Controller, Post, Body, Get } from '@nestjs/common';
import { SurveyResponseResourceService } from '../services/resource';
import { IPayload } from '../common';

@Controller('survey-responses')
export class SurveyResponsesController {
    constructor(private service: SurveyResponseResourceService) { }
    @Post()
    public post(@Body() response: any) {
        return this.service.addBotSurveyResponse(response);
    }

    @Get()
    public get(): Promise<IPayload<any>> {
        return this.service.get();
    }
}
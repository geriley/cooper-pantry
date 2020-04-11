import { Module } from '@nestjs/common';
import { SurveyResponseModule } from '../../entities';
import { SurveyResponseRepoService } from '../../services/repository';
import { SurveyResponseResourceService } from '../../services/resource';
import { SurveyResponsesController } from '../survey.controller';

@Module({
    imports: [SurveyResponseModule],
    providers: [SurveyResponseRepoService, SurveyResponseResourceService],
    controllers: [SurveyResponsesController]
})
export class SurveyResponseHttpModule { }
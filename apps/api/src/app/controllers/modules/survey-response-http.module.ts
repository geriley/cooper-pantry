import { Module } from '@nestjs/common';
import { SurveyResponseModule } from '../../entities';
import { SurveyResponseRepoService } from '../../services/repository';
import { SurveyResponseResourceService } from '../../services/resource';
import { SurveyResponsesController } from '../survey.controller';
import { SurveyScoreService } from '../../services/helper';

@Module({
    imports: [SurveyResponseModule],
    providers: [SurveyResponseRepoService, SurveyResponseResourceService, SurveyScoreService],
    controllers: [SurveyResponsesController]
})
export class SurveyResponseHttpModule { }
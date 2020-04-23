import { Module } from '@nestjs/common';
import { ResourceServiceHelper } from '../../common/base-resource.service';
import { SurveyResponseModule } from '../../entities';
import { UserModule } from '../../entities/modules/user.module';
import { SurveyScoreService } from '../../services/helper/survey-score.service';
import { SurveyResponseRepoService } from '../../services/repository';
import { UserRepoService } from '../../services/repository/user-repo.service';
import { SurveyResponseResourceService } from '../../services/resource';
import { UserResourceService } from '../../services/resource/user-resource.service';
import { UserController } from '../user.controller';
import { PantryRepoService } from '../../services/repository/pantry-repo.service';
import { PantryModule } from '../../entities/modules/pantry.module';

@Module({
    imports: [UserModule, SurveyResponseModule, PantryModule],
    providers: [
        UserResourceService, 
        UserRepoService, 
        ResourceServiceHelper, 
        SurveyResponseResourceService, 
        SurveyResponseRepoService, 
        SurveyScoreService,
        PantryRepoService
    ],
    controllers: [UserController]
})
export class UserHttpModule { }
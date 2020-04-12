import { UserModule } from '../../entities/modules/user.module';
import { UserResourceService } from '../../services/resource/user-resource.service';
import { UserRepoService } from '../../services/repository/user-repo.service';
import { UserController } from '../user.controller';
import { Module } from '@nestjs/common';
import { ResourceServiceHelper } from '../../common/base-resource.service';

@Module({
    imports: [UserModule],
    providers: [UserResourceService, UserRepoService, ResourceServiceHelper],
    controllers: [UserController]
})
export class UserHttpModule { }
import { Module } from '@nestjs/common';
import { PantryModule } from '../../entities';
import { PantryResourceService } from '../../services/resource';
import { PantriesController } from '../pantry.controller';
import { PantryRepoService } from '../../services/repository/pantry-repo.service';

@Module({
    imports: [PantryModule],
    providers: [PantryResourceService, PantryRepoService],
    controllers: [PantriesController]
})
export class PantryHttpModule { }
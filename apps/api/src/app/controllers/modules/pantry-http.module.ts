import { Module, HttpModule } from '@nestjs/common';
import { PantryModule } from '../../entities';
import { PantryResourceService } from '../../services/resource';
import { PantriesController } from '../pantry.controller';
import { PantryRepoService } from '../../services/repository/pantry-repo.service';
import { InventoryListingModule } from '../../entities/modules/inventory-listing.module';
import { InventoryListingResourceService } from '../../services/resource/inventory-listing-resource.service';
import { InventoryRepoService } from '../../services/repository/inventory-repo.service';

@Module({
    imports: [
        PantryModule,
        InventoryListingModule,
        HttpModule
    ],
    providers: [
        PantryResourceService, 
        PantryRepoService,
        InventoryListingResourceService,
        InventoryRepoService
    ],
    controllers: [PantriesController]
})
export class PantryHttpModule { }
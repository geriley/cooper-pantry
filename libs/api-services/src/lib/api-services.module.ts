import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommunicationsDataService } from './http-services';
import { UserAccessService } from './access-services';
import { UserDataService } from './http-services/user-data.service';
import { PantryDataService } from './http-services/pantry-data.service';
import { InventoryAccessService } from './access-services/inventory-access.service';

const accessServices = [
    UserAccessService,
    InventoryAccessService
];

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [
        CommunicationsDataService,
        UserDataService,
        PantryDataService,
        ...accessServices
    ]
})
export class ApiServicesModule { }

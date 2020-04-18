import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommunicationsDataService } from './http-services';
import { UserAccessService } from './access-services';
import { UserDataService } from './http-services/user-data.service';

const accessServices = [
    UserAccessService
];

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [
        CommunicationsDataService,
        UserDataService,
        ...accessServices
    ]
})
export class ApiServicesModule { }
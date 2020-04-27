import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { PantryDataService, InventoryAccessService, IInventoryDomain } from '@cooper/api-services';
import { map, flatMap, switchMap } from 'rxjs/operators';
import { IPayloadData, IPantryDTO } from '@cooper/api-interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'cooper-pantry',
    templateUrl: './pantry.component.html',
    styleUrls: ['./pantry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PantryComponent {
    constructor(
        private activatedRoute: ActivatedRoute,
        private pantryService: PantryDataService,
        private inventoryService: InventoryAccessService
    ) { }

    public pantry: Observable<IPayloadData<IPantryDTO>> = this.activatedRoute.paramMap.pipe(
        map((params: ParamMap) => params.get('id')),
        flatMap((id) => this.pantryService.getById(id)),
        map((dto) => dto?.data as IPayloadData<IPantryDTO>),
    );

    public pantryName = this.pantry.pipe(
        map((dto) => dto?.attributes?.name)
    );

    public inventory: Observable<IInventoryDomain[]> = this.pantry.pipe(
        map((dto) => dto.id),
        switchMap((id) => this.inventoryService.get(id))
    );

    public open(fdcId: string) {
        const url = `https://fdc.nal.usda.gov/fdc-app.html#/food-details/${fdcId}/nutrients`;
        window.open(url);
    }

}
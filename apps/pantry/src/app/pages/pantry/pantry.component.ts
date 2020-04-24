import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { PantryDataService } from '@cooper/api-services';
import { map, flatMap } from 'rxjs/operators';
import { IPayloadData, IPantryDTO } from '@cooper/api-interfaces';

@Component({
    selector: 'cooper-pantry',
    templateUrl: './pantry.component.html',
    styleUrls: ['./pantry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PantryComponent {
    constructor(
        private activatedRoute: ActivatedRoute,
        private pantryService: PantryDataService
    ) { }

    public pantry = this.activatedRoute.paramMap.pipe(
        map((params: ParamMap) => params.get('id')),
        flatMap((id) => this.pantryService.getById(id)),
        map((dto) => dto?.data),
        map((data: IPayloadData<IPantryDTO>) => data?.attributes?.name)
    );

    public items = Array(50).fill(null).map((u, i) => i);
}
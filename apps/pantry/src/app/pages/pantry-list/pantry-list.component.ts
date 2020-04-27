import { Component } from '@angular/core';
import { PantryDataService } from '@cooper/api-services';
import { map } from 'rxjs/operators';
import { IPayloadData, IPantryDTO } from '@cooper/api-interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'cooper-pantry-list',
    templateUrl: './pantry-list.component.html',
})
export class PantryListComponent {
    constructor(
        private service: PantryDataService,
        private router: Router,
    ) { }

    public pantryNames: Observable<{ name: string, id: string }[]> = this.service.get().pipe(
        map((p) => p.data as IPayloadData<IPantryDTO>[]),
        map((p) => p.map((pantry) => ({ name: pantry?.attributes?.name, id: pantry?.id }))
        )
    );

    public pantryUrl(id: string) {
        return `/pantry/${id}`;
    }
}

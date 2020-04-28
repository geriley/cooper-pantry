import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PantryDataService, UserAccessService } from '@cooper/api-services';
import { CooperResourceType, IPayloadDataRelationship, IPantryDTO, IPayloadData } from '@cooper/api-interfaces';
import { UserContextFacade } from '@cooper/state/user-context';
import { map, filter, first, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'cooper-pantry-info',
    templateUrl: './pantry-info.component.html'
})
export class PantryInfoComponent implements OnInit {
    public pantry: FormGroup = this._formBuilder.group({
        name: ['', Validators.required],
    });
    private pantryId: string;
    private userId: string;

    public ngOnInit() {
        this.context.user.pipe(
            filter((u) => u.id !== undefined),
            map((u) => u.id),
            first()
        ).toPromise().then((uId) => {
            this.userId = uId;
            return this.userService.getById(uId).toPromise();
        }).then((user) => {
            return user && user.relationships ? user.relationships['employer'] : undefined;
        }).then((employer: IPayloadDataRelationship) => {
            this.pantryId = employer?.id;
            return this.pantryId ? this.formService.getById(this.pantryId).toPromise() : undefined;
        }).then((pantry) => {
            const data = pantry?.data as IPayloadData<IPantryDTO>;
            this.pantry = this._formBuilder.group({
                name: [data?.attributes?.name ? data.attributes.name : '', Validators.required],
            });
        });
    }

    public submit() {
        const form = this.pantry.value;
        this.formService.post({
            data: {
                id: this.pantryId,
                type: CooperResourceType.Pantry,
                attributes: {
                    name: form.name,
                }
            }
        }).toPromise().then((res) => {
            return this.userService.updatePantryRelationship(this.userId, (res.data as IPayloadData<IPantryDTO>).id).toPromise();
        }).then(() => {
            this.snackBar.open('Saved pantry summary', undefined, { duration: 2000 });
            this.context.refresh();
        });
    }


    constructor(
        private _formBuilder: FormBuilder,
        private formService: PantryDataService,
        private userService: UserAccessService,
        private context: UserContextFacade,
        private snackBar: MatSnackBar,
    ) { }
}
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { states } from '../states';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserContextFacade } from '@cooper/state/user-context';
import { first, filter } from 'rxjs/operators';

@Component({
    selector: 'cooper-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoComponent implements OnInit {
    public states = states;
    public contact: FormGroup;

    public ngOnInit() {
        this.userContext.user.pipe(
            filter((u) => u.id !== undefined),
            first()
        ).toPromise().then((u) => {
            this.contact = this._formBuilder.group({
                firstName: [u?.name?.first ?? '', Validators.required],
                lastName: [u?.name?.last ?? '', Validators.required],
                mobilePhone: [u?.mobilePhone ?? '', Validators.required],
                address1: [u?.address?.address1 ?? '', Validators.required],
                address2: [u?.address?.address2 ?? ''],
                city: [u?.address?.city ?? '', Validators.required],
                state: [u?.address?.state ?? '', Validators.required],
                zipcode: [u?.address?.zipcode ?? '', Validators.required],
            });
        });
    }

    public save() {
        const userContact = this.contact.value;
        this.userContext.patchUser({
            address: {
                address1: userContact.address1,
                address2: userContact.address2,
                zipcode: userContact.zipcode,
                city: userContact.city,
                state: userContact.state,
            },
            name: {
                first: userContact.firstName,
                last: userContact.lastName
            },
            mobilePhone: userContact.mobilePhone
        })
    }

    constructor(
        private _formBuilder: FormBuilder,
        private userContext: UserContextFacade
    ) { }
}
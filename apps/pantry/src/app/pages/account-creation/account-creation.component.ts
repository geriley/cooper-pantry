import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'cooper-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCreationComponent {
    public states = [];
    public name = this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userRole: ['', Validators.required],
        mobilePhone: ['', Validators.required]
    });
    public address = this._formBuilder.group({
        address1: ['', Validators.required],
        address2: [''],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
    });

    constructor(private _formBuilder: FormBuilder) { }

    public submit() {

    }
}
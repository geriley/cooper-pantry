import { Component } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { ICustomerDomain, CommunicationsDataService, FoodSecurityLevel } from '@cooper/api-services';
import { Validators, FormControl } from '@angular/forms';
import { first, map, startWith, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'cooper-communications',
    templateUrl: './communications.component.html'
})
export class CommunicationsComponent { 
    public recipients = new BehaviorSubject<ICustomerDomain[]>([]);

    public level = FoodSecurityLevel;
    public message = new FormControl('', [Validators.required, Validators.maxLength(160)]);
    public securityLevel = new FormControl('');
    public criteria = this.securityLevel.valueChanges.pipe(
        tap((security) => console.log(security)),
        map((security: FoodSecurityLevel) => ({ foodSecurityLevel: security })),
        startWith(() => ({ foodSecurityLevel: undefined }))
    );
    public selectRecipients(users) {
        this.recipients.next(users);
    }

    public submit() {
        this.recipients.pipe(first()).toPromise().then((customers) => {
            const numbers = customers.map((c) => c.mobilePhoneNumber);
            return this.communications.sms({
                numbers,
                messageContent: this.message.value
            }).toPromise();
        }).then(() => {
            this.snack.open('Successfully delivered SMS to all recipients', undefined, { duration: 2000 });
        }).catch(() => {
            this.snack.open('Failed to send SMS to some users', undefined, { duration: 2000 });
        });
    }

    constructor(
        private communications: CommunicationsDataService,
        private snack: MatSnackBar
    ) { }
}


import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FirebaseService } from '../../common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'cooper-sign-in',
    templateUrl: './sign-in.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
    constructor(private fire: FirebaseService) { }

    public error = new BehaviorSubject<string>(undefined);

    public formGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    public signIn() {
        const form = this.formGroup.value;
        this.fire.signInWithEmailAndPassword(form.email, form.password).then((success) => {
            console.log(success);
            if (!success) {
                this.error.next('Invalid email/password combination.');
            }
        });
    }

    public signUp() {
        const form = this.formGroup.value;
        this.fire.createUserWithEmailAndPassword(form.email, form.password).then((success) => {
            console.log(success);
            if (!success) {
                this.error.next('Failed to create account.');
            }
        });
    }

}
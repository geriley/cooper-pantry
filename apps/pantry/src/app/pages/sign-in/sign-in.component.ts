import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole } from '@cooper/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from '../../common';

@Component({
    selector: 'cooper-sign-in',
    templateUrl: './sign-in.component.html',
})
export class SignInComponent {
    constructor(
        private fire: FirebaseService,
        private router: Router
    ) { }

    public error = new BehaviorSubject<string>(undefined);

    public formGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    public signIn() {
        const form = this.formGroup.value;
        this.fire.signInWithEmailAndPassword(form.email, form.password).then((success) => {
            if (success) {
                this.router.navigate(['/home'], { replaceUrl: true });
            } else {
                this.error.next('Invalid email/password combination.');
            }
        });
    }

    public signUp(role: 'PANTRY' | 'CUSTOMER') {
        const form = this.formGroup.value;
        this.fire.createUserWithEmailAndPassword(
            form.email,
            form.password,
            role === 'PANTRY'
                ? UserRole.PantryAdmin
                : UserRole.Customer
        ).then((success) => {
            if (success) {
                this.router.navigate(['/home'], { replaceUrl: true });
            } else {
                this.error.next('Failed to create account.');
            }
        });
    }

}
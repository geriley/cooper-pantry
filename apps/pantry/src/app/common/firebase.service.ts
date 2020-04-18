import { Injectable, Inject } from '@angular/core';
import { firebaseConfig } from './firebase-token';
import * as firebase from 'firebase';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
    constructor(
        @Inject(firebaseConfig) private config
    ) { }

    private auth: firebase.auth.Auth;
    public token = new BehaviorSubject<string>(undefined);
    public isLoggedIn = this.token.pipe(
        map((t) => t !== undefined),
        shareReplay(),
    );

    public init() {
        const fire = firebase.initializeApp(this.config);
        this.auth = fire.auth();

        this.auth.onAuthStateChanged((user: firebase.User) => {
            if (user) {
                console.log(user);
                user.getIdToken().then((t) => {
                    console.log(t);
                    this.token.next(t);
                });
            } else {
                this.token.next(undefined);
            }
        });
    }

    public createUserWithEmailAndPassword(email: string, password: string): Promise<boolean> {
        return this.auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                return true;
            })
            .catch(() => false);
    }

    public signInWithEmailAndPassword(email: string, password: string): Promise<boolean> {
        return this.auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                return true;
            })
            .catch(() => false);
    }
}
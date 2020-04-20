import { Inject, Injectable } from '@angular/core';
import { UserRole } from '@cooper/api-interfaces';
import { UserContextFacade } from '@cooper/state/user-context';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { firebaseConfig } from './firebase-token';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
    constructor(
        @Inject(firebaseConfig) private config,
        private userContext: UserContextFacade
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
                user.getIdToken().then((t) => {
                    this.token.next(t);
                });
                this.userContext.setUserId(user.uid);
            } else {
                this.token.next(undefined);
            }
        });
    }

    public createUserWithEmailAndPassword(email: string, password: string, role: UserRole): Promise<boolean> {
        return this.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.userContext.upsertUser({ id: user.user.uid, role });
                return true;
            })
            .catch(() => false);
    }

    public signInWithEmailAndPassword(email: string, password: string): Promise<boolean> {
        return this.auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                return true;
            })
            .catch(() => false);
    }
}
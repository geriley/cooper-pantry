import { Injectable } from '@angular/core';
import { IUserContext } from './state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { upsertUser, setUserIdContext } from './actions';
import { map, first } from 'rxjs/operators';
import { UserRole } from '@cooper/api-interfaces';
import { userSelector } from './reducer';

@Injectable()
export class UserContextFacade {
    constructor(private store: Store<IUserContext>) { }

    public user: Observable<IUserContext> = this.store.select(userSelector);

    public isPantryStaff = this.user.pipe(
        map((u) => u?.role === UserRole.PantryAdmin)
    );

    public upsertUser(user: IUserContext) {
        this.store.dispatch(upsertUser({ user }));
    }

    public patchUser(user: Partial<IUserContext>) {
        this.user.pipe(first()).toPromise().then((u) => {
            this.store.dispatch(upsertUser({ user: { ...u,  ...user }}));
        });
    }

    public setUserId(id: string) {
        this.store.dispatch(setUserIdContext({ id }));
    }
}
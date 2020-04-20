import { Injectable } from "@angular/core";
import { UserAccessService } from '@cooper/api-services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserContextActionType, setUserContext } from './actions';
import { IUserContext } from './state';
import { IUserDTO, IPayloadData, UserRole, CooperResourceType } from '@cooper/api-interfaces';
import { switchMap, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UserContextEffects {
    constructor(
        private actions: Actions,
        private user: UserAccessService,
        private snack: MatSnackBar,
    ) { }

    public setUserContextEffect = createEffect(() => {
        return this.actions.pipe(
            ofType(UserContextActionType.SetUserId),
            switchMap((action: { id: string }) => {
                return this.user.getById(action.id).pipe(
                    map((dto) => setUserContext({ user: { ...this.mapFromDTO(dto), id: action.id } })),
                    tap(() => this.snack.open('Logged in.'))
                );
            }),
        );
    })

    public createUser = createEffect(() => {
        return this.actions.pipe(
            ofType(UserContextActionType.UpsertUser),
            switchMap((action: { user: IUserContext }) => {
                return this.user.updateUser(this.mapToDTO(action.user))
            }),
            map((dto) => {
                this.snack.open('Successfully updated account.');
                return setUserContext({ user: this.mapFromDTO(dto.data as IPayloadData<IUserDTO>) });
            })
        );
    });

    private mapToDTO(e: IUserContext): IPayloadData<IUserDTO> {
        return {
            type: CooperResourceType.User,
            id: e?.id,
            attributes: {
                address: e?.address,
                firstName: e?.name?.first,
                lastName: e?.name?.last,
                mobilePhone: e?.mobilePhone,
                userRole: e?.role ?? UserRole.Customer
            }
        }
    }

    private mapFromDTO(dto: IPayloadData<IUserDTO>) {
        return {
            id: dto?.id,
            name: {
                first: dto?.attributes?.firstName,
                last: dto?.attributes?.lastName,
            },
            address: dto?.attributes?.address,
            mobilePhone: dto?.attributes?.mobilePhone,
            role: dto?.attributes?.userRole
        }
    }
}
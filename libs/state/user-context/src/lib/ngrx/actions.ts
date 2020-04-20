import { createAction, props } from '@ngrx/store';
import { IUserContext } from './state';

export enum UserContextActionType {
    SetUserId = 'Fetch User Id Context',
    SetUserContext = 'Set User Context',
    UpsertUser = 'Upsert User'
}

export const setUserIdContext = createAction(UserContextActionType.SetUserId, props<{ id: string }>());
export const setUserContext = createAction(UserContextActionType.SetUserContext, props<{ user: IUserContext }>());
export const upsertUser = createAction(UserContextActionType.UpsertUser, props<{ user: IUserContext }>());

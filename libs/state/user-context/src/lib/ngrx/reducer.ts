import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { setUserContext } from './actions';
import { IUserContext } from './state';

const initialState: IUserContext = {
    id: undefined,
    name: undefined,
    address: undefined,
    mobilePhone: undefined,
    role: undefined,
};

const reducer = createReducer(
    initialState,
    on(setUserContext, (_, props) => ({ ...props.user })),
);

export function userContextReducer(state, action) {
    return reducer(state, action);
}

export const featureName = 'user-context';
const featureSelector = createFeatureSelector<IUserContext>(featureName);
export const userSelector = createSelector(featureSelector, (s) => s);
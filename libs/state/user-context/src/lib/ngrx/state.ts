import { IAddress, UserRole } from '@cooper/api-interfaces';

export interface IUserContext {
    id: string;
    name?: {
        first: string;
        last: string;
    },
    address?: IAddress;
    mobilePhone?: string;
    role: UserRole;
}
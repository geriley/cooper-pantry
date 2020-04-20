import { IAddress } from './address.model';

export enum UserRole {
    PantryAdmin = 'PANTRY ADMIN',
    Customer = 'CUSTOMER'
}

export interface IUserDTO {
    firstName: string;
    lastName: string;
    address?: IAddress,
    userRole: UserRole;
    mobilePhone?: string;
}
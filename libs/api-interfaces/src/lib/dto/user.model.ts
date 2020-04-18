import { IAddress } from './address.model';

export interface IUserDTO {
    firstName: string;
    lastName: string;
    address?: IAddress
}
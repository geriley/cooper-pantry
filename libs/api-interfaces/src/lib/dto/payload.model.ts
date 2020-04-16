import { CooperResourceType } from '../resource-types.enum';
export interface IPayloadDataRelationship {
    type: CooperResourceType;
    id: string;
}

export interface IPayloadData<T> {
    type: string;
    id: string;
    attributes: T;
    relationships?: {
        [relationshipKey: string]: IPayloadDataRelationship | IPayloadDataRelationship[]
    }
}

export interface IPayloadError {
    id?: string;
    status?: string;
    title?: string;
    detail?: string;
}

export interface IPayload<T> {
    data?: IPayloadData<T> | IPayloadData<T>[];
    included?: IPayloadData<any>[]; 
    errors?: IPayloadError[];
}
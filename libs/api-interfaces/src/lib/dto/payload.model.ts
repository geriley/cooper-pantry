export interface IPayloadData<T> {
    type: string;
    id: string;
    attributes: T;
}

export interface IPayloadError {
    id?: string;
    status?: string;
    title?: string;
    detail?: string;
}

export interface IPayload<T> {
    data?: IPayloadData<T> | IPayloadData<T>[];
    errors?: IPayloadError[];
}
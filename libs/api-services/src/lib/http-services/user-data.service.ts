import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { baseApiUrlToken } from '../base-url-token';
import { IPayload, IUserDTO } from '@cooper/api-interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class UserDataService {
    constructor(private http: HttpClient, @Inject(baseApiUrlToken) private url: string) { }

    public getUser(id: string): Observable<IPayload<IUserDTO>> {
        const url = `${this.url}/users/${id}`;
        return this.http.get<IPayload<IUserDTO>>(url);
    }

    public getUserList(): Observable<IPayload<IUserDTO>> {
        const url = `${this.url}/users`;
        return this.http.get<IPayload<IUserDTO>>(url, { params: { ['include']: 'survey-response' }});
    }

    public updateUser(payload: IPayload<IUserDTO>): Observable<IPayload<IUserDTO>> {
        console.log(payload);
        const id = payload.data[0].id;
        const url = `${this.url}/users/${id}`;
        return this.http.put<IPayload<IUserDTO>>(url, payload);
    }
}
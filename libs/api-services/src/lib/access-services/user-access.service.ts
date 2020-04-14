import { Injectable } from '@angular/core';
import { UserDataService } from '../http-services/user-data.service';
import { IPayloadData, IUserDTO, IPayload } from '@cooper/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserAccessService {
    constructor(private http: UserDataService) { }

    public getById(id: string): Observable<IPayloadData<IUserDTO>> {
        return this.http.getUser(id).pipe(
            map((payload) => payload.data as IPayloadData<IUserDTO>)
        );
    }

    public updateUser(data: IPayloadData<IUserDTO>): Observable<IPayload<IUserDTO>> {
        return this.http.updateUser({
            data: [data]
        });
    }
}
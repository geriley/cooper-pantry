import { Injectable, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { IPantryDTO, IPayload } from '@cooper/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { baseApiUrlToken } from '../base-url-token';

@Injectable()
export class PantryDataService {
    constructor(
        private http: HttpClient,
        @Inject(baseApiUrlToken) private baseUrl: string
    ) { }
    private resourceUrl = `${this.baseUrl}/pantries`;

    public getById(id: string): Observable<IPayload<IPantryDTO>> {
        return this.http.get<IPayload<IPantryDTO>>(`${this.resourceUrl}/${id}`);
    }

    public get(): Observable<IPayload<IPantryDTO>> {
        return this.http.get<IPayload<IPantryDTO>>(this.resourceUrl);
    }

    public post(requestPayload: IPayload<IPantryDTO>): Observable<IPayload<IPantryDTO>> {
        return this.http.post<IPayload<IPantryDTO>>(this.resourceUrl, requestPayload);
    }
} 
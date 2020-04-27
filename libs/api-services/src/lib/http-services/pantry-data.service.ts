import { Injectable, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { IPantryDTO, IPayload, IInventoryListing } from '@cooper/api-interfaces';
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

    public searchInventory(id: string, query: string): Observable<IPayload<IInventoryListing>> {
        return this.http.get<IPayload<IInventoryListing>>(`${this.resourceUrl}/${id}/inventory-search`, { params: {
            ['query']: query,
        }});
    }

    public updateInventory(id: string, payload: IPayload<IInventoryListing>): Observable<IPayload<IInventoryListing>>  {
        return this.http.post<IPayload<IInventoryListing>>(`${this.resourceUrl}/${id}/inventory`, payload);
    }

    public getInventory(id: string): Observable<IPayload<IInventoryListing>> {
        return this.http.get<IPayload<IInventoryListing>>(`${this.resourceUrl}/${id}/inventory`);
    }
} 
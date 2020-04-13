import { Injectable, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseApiUrlToken } from '../base-url-token';
import { map } from 'rxjs/operators';

@Injectable()
export class CommunicationsDataService {
    constructor(
        private http: HttpClient,
        @Inject(baseApiUrlToken) private baseUrl: string
    ) { }

    public getChatToken(req: { identity: string }): Observable<string> {
        const url = `${this.baseUrl}/communications/chatAccessToken`;
        return this.http.post<{ jwt: string }>(url, req).pipe(map((r) => r.jwt));
    }

    public addChatBot() {

    }
}
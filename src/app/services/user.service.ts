import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userUrl = 'http://localhost:8080/api/user';
    //private adminUrl = 'http://localhost:8080/api/admin';

    constructor(private http: HttpClient) { }

    getUserInfo(username: string): Observable<any> {
        return this.http.get(this.userUrl, { params: { username } });
    }

    //getAdminBoard(): Observable<string> {
    //    return this.http.get(this.adminUrl, { responseType: 'text' });
    //}
}

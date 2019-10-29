import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Account } from '../account';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userUrl = 'http://localhost:8080/api/get-user-info';
    //private adminUrl = 'http://localhost:8080/api/admin';
    private updateUrl = 'http://localhost:8080/api/update-account';

    constructor(private http: HttpClient) { }

    getUserInfo(username: string): Observable<any> {
        return this.http.get(this.userUrl, { params: { username } });
    }

    //getAdminBoard(): Observable<string> {
    //    return this.http.get(this.adminUrl, { responseType: 'text' });
    //}

    updateInfo(account: Account): Observable<any> {
        //return this.http.put(this.updateUrl, { params: [accountId, account] });
        return this.http.put(this.updateUrl, account);
    }

}

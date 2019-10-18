import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userUrl = 'http://localhost:8080/api/test/user';
    private adminUrl = 'http://localhost:8080/api/test/admin';

    constructor(private http: HttpClient) { }

    getUserBoard(): Observable<string> {
        return this.http.get(this.userUrl, { responseType: 'text' });
    }

    getAdminBoard(): Observable<string> {
        return this.http.get(this.adminUrl, { responseType: 'text' });
    }
}

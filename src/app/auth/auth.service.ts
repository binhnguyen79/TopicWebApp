import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthLoginInfo } from './login-info';
import { JwtResponse } from './jwt-response';
import { SignUpInfo } from './signup-info';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loginUrl = 'http://localhost:8080/api/auth/signin';
    private signUpUrl = 'http://localhost:8080/api/auth/signup';

    constructor(private http: HttpClient) { }

    attempAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    }

    signUp(info: SignUpInfo): Observable<string> {
        return this.http.post<string>(this.signUpUrl, info, httpOptions);
    }
}

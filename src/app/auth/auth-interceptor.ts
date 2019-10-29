import { HTTP_INTERCEPTORS, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { from, Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenStorage: TokenStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.tokenStorage.getToken();

        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token                    
                },
                responseType: 'json',
                withCredentials: false
            });
        }

        console.log("## Headers: " + request.headers.get('Authorization'));
        return next.handle(request);
    }

}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

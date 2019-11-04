import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminGetAccountUrl: 'http://localhost:8080/api/get-account-by-admin'

  constructor(private http: HttpClient) { }

  public getAccountByAdmin(username: string): Observable<any> {
    return this.http.get(this.adminGetAccountUrl, { params: {username} });
  }
}

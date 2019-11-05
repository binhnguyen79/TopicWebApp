import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminGetAccountUrl = 'http://localhost:8080/api/get-account-by-admin';
  private adminActivateAccountUrl = 'http://localhost:8080/api/activate-account';
  private adminUpdateAccountUrl = 'http://localhost:8080/api/update-account-by-admin';
  private adminDeleteAccountUrl = 'http://localhost:8080/api/delete-account';

  constructor(private http: HttpClient) { }

  public getAccountByAdmin(): Observable<any> {
    return this.http.get(this.adminGetAccountUrl);
  }

  public updateAccount(account: Account): Observable<any> {
    return this.http.put(this.adminUpdateAccountUrl, account);
  }

  public activateAccount(account: Account): Observable<any> {
    return this.http.put(this.adminActivateAccountUrl, account);
  }

  public deleteAccount(username: string): Observable<any> {
    return this.http.delete(this.adminDeleteAccountUrl, { params: {username} })
  }
}

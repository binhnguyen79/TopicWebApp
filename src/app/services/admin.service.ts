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
  private adminChangeRoleUserUrl = 'http://localhost:8080/api/change-role-user-by-admin';

  constructor(private http: HttpClient) { }

  public getAccountByAdmin(): Observable<any> {
    return this.http.get(this.adminGetAccountUrl);
  }

  public activateAccount(account: Account): Observable<any> {
    return this.http.put(this.adminActivateAccountUrl, account);
  }

  public changeRole(account: Account): Observable<any> {
    return this.http.put(this.adminChangeRoleUserUrl, account);
  }

}

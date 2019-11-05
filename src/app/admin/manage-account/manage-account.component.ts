import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/account';
import { AdminService } from 'src/app/services/admin.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  accountlist: any;

  constructor(private adminService: AdminService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accountlist = this.adminService.getAccountByAdmin();
  }

  updateAccount(account: Account) {
    // const acc = new Account();
    // acc.username = account.username;
    // acc.accountId = account.accountId;
    // acc.active = account.active;
    // acc.email = account.email;
    // acc.name = account.name;
    // acc.roles = account.roles;

    // return this.adminService.updateAccount(acc);
  }

  activateAccount(account: Account) {

    const acc = new Account();
    acc.username = account.username;
    acc.accountId = account.accountId;
    acc.active = !account.active;
    acc.email = account.email;
    acc.name = account.name;
    acc.roles = account.roles;

    return this.adminService.activateAccount(acc);
  }

  deleteAccount(username: string) {
    return this.adminService.deleteAccount(username);
  }

}

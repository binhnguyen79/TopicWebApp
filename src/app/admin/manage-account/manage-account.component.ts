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
  username: string;

  constructor(private adminService: AdminService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accountlist = this.adminService.getAccountByAdmin();
  }

  clickChangeRole(a: Account) {

    return this.adminService.changeRole(a);
  }

  clickActivateAccount(a: Account) {

    return this.adminService.activateAccount(a);
  }

}

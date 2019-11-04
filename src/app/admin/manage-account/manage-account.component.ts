import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/account';
import { AdminService } from 'src/app/services/admin.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  accountList: any;

  constructor(private adminService: AdminService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.adminService.getAccountByAdmin(this.tokenStorage.getUsername()).subscribe(
      data => {
        console.log(data);
        this.accountList = data;
      }, error => {
        
      }
    )
  }

  updateAccount(aacountId: number) {
    return ;
  }

  activateAccount(accountId: number) {
    return ;
  }

  deleteAccount(accountId: number) {
    return ;
  }

}

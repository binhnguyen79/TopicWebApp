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
    console.log("Function called!!");
    console.log(a);
    this.adminService.changeRole(a).subscribe(
      data => {

      }, error => {
        
      }
    );
    // window.location.reload();
  }

  clickActivateAccount(a: Account) {
    console.log("Function called!!")
    console.log(a);
    this.adminService.activateAccount(a).subscribe(
      data => {

      }, error => {

      }
    );
    // window.location.reload();
  }

}

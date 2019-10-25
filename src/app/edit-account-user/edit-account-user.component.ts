import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';
import { Account } from '../account';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-edit-account-user',
    templateUrl: './edit-account-user.component.html',
    styleUrls: ['./edit-account-user.component.css']
})
export class EditAccountUserComponent implements OnInit {

    info: any;
    user: Account;

    constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private userService: UserService) { }

    ngOnInit() {

        this.info = {
            token: this.tokenStorage.getToken(),
            username: this.tokenStorage.getUsername(),
            authorities: this.tokenStorage.getAuthorities()
        }

        this.user = new Account();

        console.log();

        this.userService.getUserInfo(this.tokenStorage.getUsername()).subscribe(
            data => {
                console.log(data);
                this.user = data;
            }, error => console.log(error)
        );

    }
}

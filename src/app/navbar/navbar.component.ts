import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    form: any = {};
    isLoggedIn = false;
    errorMessage = '';
    roles: string[] = [];
    info: any;

    constructor(private Router: Router, private tokenStorage: TokenStorageService) { }

    ngOnInit() {
        this.info = {
            token: this.tokenStorage.getToken(),
            username: this.tokenStorage.getUsername(),
            authorities: this.tokenStorage.getAuthorities()
        }
    }

    btnSignUp() {
        this.Router.navigateByUrl('/signup');
    }

    logOut() {
        this.tokenStorage.signOut();
        console.log(this.tokenStorage.getToken());
        console.log(this.tokenStorage.getAuthorities());
        console.log(this.tokenStorage.getUsername());
        console.log("wtf bro")
        window.location.reload();
    }
}

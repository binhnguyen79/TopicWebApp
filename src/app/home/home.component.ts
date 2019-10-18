import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    info: any;

    constructor(private token: TokenStorageService) { }

    ngOnInit() {
        this.info = {
            username: this.token.getUsername()
        };
    }

    logOut() {
        this.token.signOut();
        window.location.reload();
    }
}

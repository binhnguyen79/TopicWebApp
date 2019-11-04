import { Component, Input, OnInit, Output } from '@angular/core';
import { Topic } from './topic';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'TopicWebApp';
    listSearch: Array<Topic>;
    roles: string[];
    authority: string;

    constructor(private tokenService: TokenStorageService) {}

    ngOnInit() {
        if(this.tokenService.getToken()) {
            this.roles = this.tokenService.getAuthorities();
            this.roles.every(role => {
                if (role === 'ROLE_ADMIN') {
                    this.authority = 'admin';
                    return false;
                }
                this.authority = 'user';
                return true;
            });
        }
    }
}

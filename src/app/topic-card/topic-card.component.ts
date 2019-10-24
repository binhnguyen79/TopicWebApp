import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
    selector: 'app-topic-card',
    templateUrl: './topic-card.component.html',
    styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {
    info: any;

    constructor(private tokenStorage: TokenStorageService) { }

    ngOnInit() {
        this.info = {
            token: this.tokenStorage.getToken(),
            username: this.tokenStorage.getUsername(),
            authorities: this.tokenStorage.getAuthorities()
        }
    }

    check() {
        if (this.info) {

        }
    }

}

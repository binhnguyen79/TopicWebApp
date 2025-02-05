import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { Observable } from 'rxjs';
import { TopicService } from '../services/topic.service';
import { Topic } from '../topic';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Output() listSearch = new EventEmitter<Array<Topic>>();
    @Input() role: string;

    form: any = {};
    isLoggedIn = false;
    errorMessage = '';
    info: any;
    keyWord: string;
    list: any;

    constructor(private Router: Router, private tokenStorage: TokenStorageService, private topicService: TopicService) { }

    ngOnInit() {
        // this.info = {
        //     token: this.tokenStorage.getToken(),
        //     username: this.tokenStorage.getUsername(),
        //     authorities: this.tokenStorage.getAuthorities()
        // }
    }

    btnSignUp() {
        this.Router.navigateByUrl('/signup');
    }

    logOut() {
        this.tokenStorage.signOut();
        console.log(this.tokenStorage.getToken());
        console.log(this.tokenStorage.getAuthorities());
        console.log(this.tokenStorage.getUsername());
        window.location.reload();
    }

    searchTopic() {
        console.log("keyword: " + this.keyWord);
        this.topicService.getTopicByKeyWord(this.keyWord).subscribe(
            data => {
                this.list = data;
            }
        )

        if (this.list != null) {
            this.listSearch = this.list;
        }
    }

    onEnter(keyWord: string) {
        this.keyWord = keyWord;
    }
}

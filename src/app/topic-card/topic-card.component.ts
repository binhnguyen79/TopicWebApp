import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Topic } from '../topic';
import { HttpClient } from '@angular/common/http';
import { TopicService } from '../services/topic.service';

@Component({
    selector: 'app-topic-card',
    templateUrl: './topic-card.component.html',
    styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {
    info: any;
    topicData: Topic[];

    constructor(private tokenStorage: TokenStorageService, private http: HttpClient, private topicService: TopicService) { }

    ngOnInit() {
        this.info = {
            token: this.tokenStorage.getToken(),
            username: this.tokenStorage.getUsername(),
            authorities: this.tokenStorage.getAuthorities()
        }

        this.topicService.getTopic().subscribe(
            data => {
                console.log(data);
                this.topicData = data;
            }, error => console.log(error)
        );

    }

    check() {
        if (this.info) {

        }
    }

}

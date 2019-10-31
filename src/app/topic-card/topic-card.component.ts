import { Component, EventEmitter, OnInit, Input, HostListener, Output, OnChanges } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Topic } from '../topic';
import { HttpClient } from '@angular/common/http';
import { TopicService } from '../services/topic.service';
import { TopicViewComponent } from '../topic-view/topic-view.component';

@Component({
    selector: 'app-topic-card',
    templateUrl: './topic-card.component.html',
    styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit, OnChanges {
    info: any;
    topicData: Topic[];

    @Input() content: Topic;
    @Output() needSend = new EventEmitter<boolean>();
    @Input('listSearch') listSearch: Array<Topic>;

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

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.topicData = this.listSearch;
        location.reload();
    }

    clickToToggle(boo: boolean) {
        this.needSend.emit(boo);
    }

}

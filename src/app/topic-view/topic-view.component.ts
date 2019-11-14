import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../topic';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../auth/token-storage.service';
import { TopicService } from '../services/topic.service';

@Component({
    selector: 'app-topic-view',
    templateUrl: './topic-view.component.html',
    styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

    isTrueOwner: boolean = false;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();
    @Input() topic;

    constructor(public activeModal: NgbActiveModal, private tokenStorage: TokenStorageService, private topicService: TopicService) { }
    
    ngOnInit() {
        console.log(this.topic);
        this.onTrueOwner().subscribe(
            data => {
                this.isTrueOwner = data;
            }, error => {
                console.log(error);
            }
        );
    }

    passBack() {
        this.activeModal.close(this.topic);
    }

    onTrueOwner() {
       return this.topicService.isTrueOwner(this.tokenStorage.getUsername(), this.topic.idTopic);
    }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-topic-comment',
    templateUrl: './topic-comment.component.html',
    styleUrls: ['./topic-comment.component.css']
})
export class TopicCommentComponent implements OnInit {

    constructor(public activeModel: NgbActiveModal) { }

    ngOnInit() {
    
    }
}
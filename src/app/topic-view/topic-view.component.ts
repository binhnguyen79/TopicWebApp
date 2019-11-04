import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../topic';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-topic-view',
    templateUrl: './topic-view.component.html',
    styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

    @Output() passEntry: EventEmitter<any> = new EventEmitter();
    @Input() topic;

    constructor(public activeModal: NgbActiveModal) { }
    
    ngOnInit() {
        console.log(this.topic);
    }

    passBack() {
        this.activeModal.close(this.topic);
    }
}

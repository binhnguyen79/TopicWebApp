import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/topic';

@Component({
    selector: 'app-topic-content',
    templateUrl: './topic-content.component.html',
    styleUrls: ['./topic-content.component.css']
})
export class TopicContentComponent implements OnInit {

    @Input('topic') topic: Topic;
 
    constructor() { }

    ngOnInit() {
    }

}

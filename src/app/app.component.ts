import { Component, Input } from '@angular/core';
import { Topic } from './topic';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TopicWebApp';
    @Input('listSearch') listSearch: Array<Topic>;
}

import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TokenStorageService } from '../auth/token-storage.service';
import { TopicService } from '../services/topic.service';
import { Topic } from '../topic';
import { TopicViewComponent } from '../topic-view/topic-view.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-topic',
  templateUrl: './my-topic.component.html',
  styleUrls: ['./my-topic.component.css']
})
export class MyTopicComponent implements OnInit {

  public isCollapsed = false;

  public Editor = ClassicEditor;

  page: number = 0;
  pageSize: number = 5;
  topicData: Topic[];

  constructor(private tokenStorage: TokenStorageService, private topicService: TopicService, private modalService: NgbModal) { }

  ngOnInit() {

    this.onGetMyTopic().subscribe(
      data => {
        console.log(data);
        this.topicData = data;
      }, error => {
        console.log(error.error.message);
      }
    );

  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  openModal(topic: Topic) {
    const modalRef = this.modalService.open(TopicViewComponent, {size: "lg"});
    modalRef.componentInstance.topic = topic;
  }

  onGetMyTopic() {
    return this.topicService.getTopicForUser(this.tokenStorage.getUsername());
  }

}

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

  public isCollapsed = true;

  public Editor = ClassicEditor;

  public ck = {
    editorData: '<p>Hello, world!</p>'
  };

  editorData: string;
  title: string;
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

  onSaveTopic() {
    this.createNewTopic(this.title, this.ck.editorData); 
    window.location.reload();   
  }

  createNewTopic(title: string, content: string) {
    const topic = new Topic();
    topic.title = title;
    topic.content = content;

    this.topicService.createTopic(title, content, this.tokenStorage.getUsername()).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  // ClassicEditor
  //   .create( document.querySelector( '#editor' ) )
  //   .then( editor => {
  //       editor.getData(); // -> '<p>Foo!</p>'
  //   } )
  //   .catch( error => {
  //       console.error( error );
  //   } );

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

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { TopicService } from 'src/app/services/topic.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Topic } from 'src/app/topic';
import { TopicViewComponent } from 'src/app/topic-view/topic-view.component';

@Component({
  selector: 'app-manage-topic',
  templateUrl: './manage-topic.component.html',
  styleUrls: ['./manage-topic.component.css']
})
export class ManageTopicComponent implements OnInit {

  page: number = 0;
  pageSize: number = 5;
  topicData: any;

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

  lockTopic(idTopic: number) {
    console.log("clicked");
    return this.topicService.unlockOrLockTopic(idTopic).subscribe(
      data => {
        window.alert("Topic " + idTopic + " state: " + data.state);
      }
    );
    // window.location.reload();
  }

  openModal(topic: Topic) {
    const modalRef = this.modalService.open(TopicViewComponent, {size: "lg"});
    modalRef.componentInstance.topic = topic;
  }

  onGetMyTopic() {
    return this.topicService.getTopicForAdmin(this.tokenStorage.getUsername());
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../topic';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../auth/token-storage.service';
import { TopicService } from '../services/topic.service';
import { error } from 'util';
import { Comment } from '../comment';
import { TrueComment } from '../true-comment';

@Component({
    selector: 'app-topic-view',
    templateUrl: './topic-view.component.html',
    styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

    isTrueOwner: boolean = false;
    isTrueOwnerComment: boolean = false;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();
    @Input() topic;
    comment: string;
    commentData: Comment[];
    commentIsTrueData: any;
    isClickOnEdit: boolean = false;
    isHidden: boolean = false;
    isClickOnComment: boolean = false;
    isAdmin: boolean = false;

    constructor(public activeModal: NgbActiveModal, private tokenStorage: TokenStorageService, private topicService: TopicService) { }
    
    ngOnInit() {
        console.log(this.topic);
        this.onTrueOwner().subscribe(
            data => {
                this.isTrueOwner = data;
                this.commentData = this.topic.commentId;
            }, error => {
                console.log(error);
            }
        );

        this.onTrueOwnerComment().subscribe(
            data => {
                console.log(data);
                this.commentData = data;
            }, error => {
                console.log(error);
            }
        );
    }
    
    onSubmitComment() {
        console.log(this.comment);
        this.topicService.submitComment(this.topic.idTopic, this.comment, this.tokenStorage.getUsername()).subscribe(
            data => {
                console.log(data);
                this.topic = data;
                this.commentData = this.topic.commentId;
            }, error => {
                console.log(error);
            }
        );
        this.comment = "";
        this.onTrueOwnerComment().subscribe(
            data => {
                console.log(data);
                this.commentData = data;
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

    onTrueOwnerComment() {
        return this.topicService.isTrueOwnerComment(this.tokenStorage.getUsername(), this.topic.idTopic);
    }

    onClickEditTopic() {
        this.isHidden = !this.isHidden;
        this.isClickOnEdit = !this.isClickOnEdit;
    }

    onClickEditComment() {
        this.isClickOnComment = !this.isClickOnComment;
    }

    onSaveUpdate() {
        this.isClickOnEdit = !this.isClickOnEdit;
        this.isHidden = !this.isHidden;
        return this.topicService.onUpdateTopic(this.topic).subscribe(
            data => {
                this.topic = data;
            }
        );
    }

    onCancel() {
        console.log('clicked btn Cancel')
    }
}

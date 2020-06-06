import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/comment';

@Component({
  selector: 'app-manage-comment',
  templateUrl: './manage-comment.component.html',
  styleUrls: ['./manage-comment.component.css']
})
export class ManageCommentComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private commentService: CommentService) { }

  commentData: Array<Comment>;

  ngOnInit() {
    this.commentService.getCommentForAdmin(this.tokenStorage.getUsername()).subscribe(
      data => {
        this.commentData = data;
      }, error => {
        console.log(error.error.message);
      }
    );
  }

  clickActivateComment(id: number) {
    this.commentService.activateComment(id).subscribe(
      data => {
        console.log(data);
        window.alert("Comment " + id + " has state: " + data.state);
        window.location.reload();
      }
    )
  }

  clickDeleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      }
    )
  }
}

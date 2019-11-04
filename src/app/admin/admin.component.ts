import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { ManageTopicComponent } from './manage-topic/manage-topic.component';
import { ManageCommentComponent } from './manage-comment/manage-comment.component';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Account } from '../account';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentJustify = "justified";

  @ViewChild(ManageAccountComponent, {static: false}) manageAccountView: ManageAccountComponent;
  @ViewChild(ManageTopicComponent, {static: false}) manageTopicView: ManageTopicComponent;
  @ViewChild(ManageCommentComponent, {static: false}) manageCommentView: ManageCommentComponent;

  constructor(private router: Router, private adminService: AdminService) { 
    this.manageAccountView;
  }

  ngOnInit() {

  }
}

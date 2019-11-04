import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditAccountUserComponent } from './edit-account-user/edit-account-user.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { AdminComponent } from './admin/admin.component';
import { MyTopicComponent } from './my-topic/my-topic.component';
import { ManageAccountComponent } from './admin/manage-account/manage-account.component';
import { ManageTopicComponent } from './admin/manage-topic/manage-topic.component';
import { ManageCommentComponent } from './admin/manage-comment/manage-comment.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'signin', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'editaccount', component: EditAccountUserComponent },
    { path: 'topic-card', component: TopicCardComponent },
    { path: 'admin-page', 
      component: AdminComponent,
      children: [
        { path: 'manage-account', component: ManageAccountComponent},
        { path: 'manage-topic', component: ManageTopicComponent },
        { path: 'manage-comment', component: ManageCommentComponent }
      ] 
    },
    { path: 'my-topic', component: MyTopicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

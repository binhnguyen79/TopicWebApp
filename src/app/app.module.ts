import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import bootstrap from "bootstrap";
import { TopicCardComponent } from './topic-card/topic-card.component';
import { MyTopicComponent } from './my-topic/my-topic.component';
import { EditAccountUserComponent } from './edit-account-user/edit-account-user.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { TopicContentComponent } from './topic-view/topic-content/topic-content.component';
import { TopicCommentComponent } from './topic-view/topic-comment/topic-comment.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent,
        RegisterComponent,
        UserComponent,
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        TopicCardComponent,
        MyTopicComponent,
        EditAccountUserComponent,
        TopicViewComponent,
        TopicContentComponent,
        TopicCommentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbPaginationModule,
        NgbAlertModule,
        NgbModule
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }

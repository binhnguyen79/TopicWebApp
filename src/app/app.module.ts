import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

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
        EditAccountUserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }

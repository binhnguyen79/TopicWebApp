import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditAccountUserComponent } from './edit-account-user/edit-account-user.component';


const routes: Routes = [
    { path: 'signin', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'editaccount', component: EditAccountUserComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

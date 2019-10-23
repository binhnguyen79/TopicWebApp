import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../auth/signup-info';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: any = {};
    signupInfo: SignUpInfo;
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {

    }

    onSubmit() {
        console.log(this.form);

        this.signupInfo = new SignUpInfo(
            this.form.name,
            this.form.username,
            this.form.email,
            this.form.password
        );

        this.authService.signUp(this.signupInfo).subscribe(
            data => {
                console.log(data);
                this.isSignedUp = true;
                this.isSignUpFailed = false;
                alert("Register Successful !!!");
                this.router.navigate(['/']);
            },
            error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isSignUpFailed = true;
            }
        );
    }

}

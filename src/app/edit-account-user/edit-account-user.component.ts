import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';
import { Account } from '../account';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-edit-account-user',
    templateUrl: './edit-account-user.component.html',
    styleUrls: ['./edit-account-user.component.css']
})
export class EditAccountUserComponent implements OnInit {

    info: any;
    user: Account;
    updateName; updateEmail; updatePassword: string;
    // ngForm: FormGroup;
    // submitted = false;

    constructor(private http: HttpClient, private tokenStorage: TokenStorageService, 
        private userService: UserService) { }

    ngOnInit() {

        this.info = {
            token: this.tokenStorage.getToken(),
            username: this.tokenStorage.getUsername(),
            authorities: this.tokenStorage.getAuthorities()
        }

        this.user = new Account();

        this.userService.getUserInfo(this.tokenStorage.getUsername()).subscribe(
            data => {
                console.log(data);
                this.user = data;
            }, error => console.log(error)
        );

        // this.ngForm = this.formBuilder.group({
        //     name: [this.user.name || '', Validators.required],
        //     email: [this.user.email || '', [Validators.required, Validators.email]],
        //     // password: [this.user.password || '', [Validators.required, Validators.minLength(6)]],
        //     // confirmPassword: ['', Validators.required]
        // });
    }

    onSubmit() {
        this.userService.updateInfo(this.user).subscribe(
            data => {
                this.user = data;
            }, error => console.log(error)
        );
        // location.reload();
    }

    // convenience getter for easy access to form fields 
    // f() { return this.ngForm.controls; }

    // onSubmit() {
    //     this.submitted = true;

    //     // stop here if form is invalid
    //     if (this.ngForm.invalid) {
    //         return;
    //     }

    //     // display form values on success
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ngForm.value, null, 4));
    // }

    // // cancel btn
    // onReset() {
    //     this.submitted = false;
    //     this.ngForm.reset();
    // }
}

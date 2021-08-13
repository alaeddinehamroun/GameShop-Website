import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: any = {
        email: null,
        password: null
    }
    invalidCredentials: boolean = false
    constructor(
        private authService: AuthService,
        private router: Router) {}
    ngOnInit() {
        if (this.authService.isLoggedIn())
            this.router.navigate([''])
    }
    login() {
        this.invalidCredentials = false
        const { email, password } = this.form;
        console.log(this.form)
        if (email && password) {
            this.authService.login(email, password)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        this.router.navigate([''])
                    }, err => {

                        if (err.status === 400)
                            this.invalidCredentials = true
                    }
                );
        }
        else
            console.log('error')
    }
}

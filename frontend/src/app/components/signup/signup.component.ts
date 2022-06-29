import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    form: any = {
        username: null,
        email: null,
        password: null
    }
    error: string = null;
    constructor(
        private authService: AuthService,
        private router: Router) {
     
    }

    ngOnInit() {
        if(this.authService.isLoggedIn())
            this.router.navigate([''])
     }
    register() {
        this.error = null;
        const {username,email,password} = this.form;
        console.log(this.form)
        if (username && email && password) {
            this.authService.register(username,email, password)
                .subscribe(
                    (response) => {
                        console.log("User is registered");
                        console.log(response)
                        this.router.navigate([''])
                    }, (error: HttpErrorResponse) => {
                        if (error.error)
                            this.error = error.error
                        console.log(this.error)
                }
                );
        }
        else
         console.log('error')
    }
}

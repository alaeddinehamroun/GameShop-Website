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
    error: boolean = false
    constructor(
        private authService: AuthService,
        private router: Router) {
     
    }

    ngOnInit() {
        if(this.authService.isLoggedIn())
            console.log("loggedIn")
     }
    register() {
        this.error = false
        const {username,email,password} = this.form;
        console.log(this.form)
        if (username && email && password) {
            this.authService.register(username,email, password)
                .subscribe(
                    () => {
                        console.log("User is registered");
                        this.router.navigate([''])
                    }, err => {   
                        
                                        this.error = true
                }
                );
        }
        else
         console.log('error')
    }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "app/models/user.model";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, shareReplay, tap } from 'rxjs/operators';
import * as moment from "moment";


@Injectable({
    providedIn: 'root'
  })


export class AuthService {
    private SERVER_URL = environment.SERVER_URL;
    constructor(private http: HttpClient){}

    login(email: string, passsword: string): Observable<IUser>{
        return this.http.post<IUser>(this.SERVER_URL + '/user/login',{email: email, password: passsword}).pipe(tap(res => this.setSession(res)),shareReplay(),catchError((err)=> {
            return throwError(err)
        }))
    }
    

    register(username:string, email: string, passsword: string): Observable<any>{
        return this.http.post<any>(this.SERVER_URL + '/user/register',{username: username,email: email, password: passsword}).pipe(tap(res => this.setSession(res)),shareReplay())
    }

    private setSession(authResult) {

        const expiresAt = moment().add(authResult.expiresIn,'second');
        localStorage.setItem('id_token', authResult.token)
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()))

    }
    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }
    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }
    isLoggedOut() {
        return !this.isLoggedIn();
    }
    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    

}
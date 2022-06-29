import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Interception In Progress"); // Interception Stage

        const idToken: string  = localStorage.getItem("id_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("authorization",
                    idToken)
            });
            return next.handle(cloned).pipe(
                catchError((error: HttpErrorResponse) => {
                     // Catching Error Stage
                     if (error && error.status === 401) {
                         console.log("ERROR 401 UNAUTHORIZED") // in case of an error response the error message is displayed
                     }
                     return throwError(()=> {console.log(error)}); // any further errors are returned to frontend                    
                })
             );;
        }
        else {
            return next.handle(req);
        }
    }
}
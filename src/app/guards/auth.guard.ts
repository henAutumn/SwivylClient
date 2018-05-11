import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable() 
    export class AuthGaurd implements CanActivate {
        constructor(private router: Router) {}

        canActivate(): Observable<boolean> {
            return new Observable<boolean>((observer) => {
                if (!localStorage.getItem('token')) {
                    this.router.navigate(['./login'])
                    return observer.next(false);
                } else {
                    return observer.next(true);
                }
            })
        }
    }
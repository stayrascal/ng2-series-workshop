import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate{

    JWT_KEY = 'retain_token';

    constructor(private router: Router) { }

    isAuthencated(): boolean {
        return !!localStorage.getItem(this.JWT_KEY)
    }

    canActivate(): boolean {
        const isAuth = this.isAuthencated();
        if (!isAuth){
            this.router.navigate(['/auth'])
        }
        return isAuth;
    }

}
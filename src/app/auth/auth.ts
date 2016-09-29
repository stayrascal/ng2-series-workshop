import {Component, OnInit, Injectable} from "@angular/core";
import {AuthService} from "../shared/services/auth";
import {Router} from "@angular/router";

const linkTexts = {
    signIn: `Don't have an account?`,
    signUp: `Already have an account`
};

@Component({
    selector: 'auth',
    template: require('./auth.html'),
    styles: [require('./auth.css')]
})

export class AuthComponent implements OnInit {
    user: {email: string, password: string};
    mode: 'signIn' | 'signUp';
    linkText: string;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.user = {email: '', password: ''};
        this.mode = 'signIn';
        this.linkText = linkTexts.signIn;
    }

    changeMode(): void {
        if (this.mode === 'signIn') {
            this.mode = 'signUp';
            this.linkText = linkTexts.signUp
        } else {
            this.mode = 'signIn';
            this.linkText = linkTexts.signIn
        }
    }

    authenticate(): void {
        this.authService.authenticate(this.mode, this.user)
            .subscribe(() => this.router.navigate(['/']))
    }
}
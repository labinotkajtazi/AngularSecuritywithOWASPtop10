import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    token: string;
    authState: any = null;
    username: string;

    constructor(private router: Router) {
    
    }

    signupUser(email:string, password:string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['./login'])
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['./']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                )
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    logout() {
        firebase.auth().signOut();
        this.router.navigate(['./']);
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    setToken(token: string) {
        this.token = token;
    }

    isAuthenticated() {
        return this.token != null;
            // return true;
    }
}
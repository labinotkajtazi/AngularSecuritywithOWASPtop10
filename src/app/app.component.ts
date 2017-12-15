import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tema';

  constructor(private authService: AuthService){

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBrfCaLpQqidZeMywBFWVcIyQqk_bVHMu4",
      authDomain: "owasp-angular.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(
          (token: string) => this.authService.setToken(token)
        );
      }
    });
  }

  loadedFeature = 'home';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

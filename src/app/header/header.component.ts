import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username: string;

  constructor(private authService:AuthService) { 
    this.username = "test";
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
}

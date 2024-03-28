import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService, User} from '@auth0/auth0-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-app';

  user!: User;
  isAuthenticated = false;

  constructor(private readonly auth0Service: AuthService){}

  ngOnInit(){
     this.auth0Service.user$.subscribe(user => this.user = user as User);
     this.auth0Service.isAuthenticated$.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated as boolean);
    }

  login(){
    this.auth0Service.loginWithRedirect();
  }

  loginPopUp(){
    this.auth0Service.loginWithPopup();
  }

  logout(){
    this.auth0Service.logout();
  }

}

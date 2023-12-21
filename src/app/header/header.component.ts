import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  loginDetails: any = {};

  logout(): void {
    localStorage.clear();
    window.location.href="/";
  }

  ngOnInit(): void {
    this.loginDetails = JSON.parse(localStorage.getItem('login') || '');
  }
}

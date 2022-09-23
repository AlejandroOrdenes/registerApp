import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userName = localStorage.getItem("userName")

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("userName: ", this.userName)
    localStorage.removeItem('userName');
  }

  goToCodeQR() {
    this.router.navigate(['/code-qr'])
  }
}

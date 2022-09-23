import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCodeQR() {
    this.router.navigate(['/code-qr'])
  }
}

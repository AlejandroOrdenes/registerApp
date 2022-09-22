import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = new FormGroup({
    user: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  })

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToReset() {
    this.router.navigate(['/reset-pass'])
  }

  goToHome() {
    this.router.navigate(['/home'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-qr',
  templateUrl: './code-qr.page.html',
  styleUrls: ['./code-qr.page.scss'],
})
export class CodeQrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home'])
  }

}

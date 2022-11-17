import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user = JSON.parse(localStorage.getItem("User"))
  userName = this.user.firstName


  constructor(private router: Router) { }

  ngOnInit() {
    
    localStorage.removeItem('User');
    if(this.user == null) {
      this.router.navigateByUrl('/login', {replaceUrl: true})
    }
    console.log("User: ", this.user)
  }

  goToCodeQR() {
    this.router.navigate(['/code-qr'])
  }
}

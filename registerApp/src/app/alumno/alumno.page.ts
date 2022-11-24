import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

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


  goToAlumnoScanner() {
    this.router.navigate(['/alumno-scanner-activo'])
  }
  goToAlumnoScannerdes() {
    this.router.navigate(['/alumno-scanner'])
  }
}


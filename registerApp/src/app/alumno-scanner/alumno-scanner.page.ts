import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-scanner',
  templateUrl: './alumno-scanner.page.html',
  styleUrls: ['./alumno-scanner.page.scss'],
})
export class AlumnoScannerPage implements OnInit {

  user = JSON.parse(localStorage.getItem("User"))
  userName = this.user.firstName
  Result= JSON.parse(localStorage.getItem("Result"))
  

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('User');
    if(this.user == null) {
      this.router.navigateByUrl('/login', {replaceUrl: true})
    }
    console.log("User: ", this.user)
  }

  goToAlumno() {
    this.router.navigate(['/alumno'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToAlumnoScanner() {
    this.router.navigate(['/alumno-scanner'])
  }
}

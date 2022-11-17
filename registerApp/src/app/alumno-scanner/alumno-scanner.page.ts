import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-scanner',
  templateUrl: './alumno-scanner.page.html',
  styleUrls: ['./alumno-scanner.page.scss'],
})
export class AlumnoScannerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAlumno() {
    this.router.navigate(['/alumno'])
  }

}

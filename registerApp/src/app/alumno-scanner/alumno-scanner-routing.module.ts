import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoScannerPage } from './alumno-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoScannerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoScannerActivoPage } from './alumno-scanner-activo.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoScannerActivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoScannerActivoPageRoutingModule {}

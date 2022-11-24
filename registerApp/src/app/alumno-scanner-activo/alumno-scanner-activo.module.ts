import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoScannerActivoPageRoutingModule } from './alumno-scanner-activo-routing.module';

import { AlumnoScannerActivoPage } from './alumno-scanner-activo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoScannerActivoPageRoutingModule
  ],
  declarations: [AlumnoScannerActivoPage]
})
export class AlumnoScannerActivoPageModule {}

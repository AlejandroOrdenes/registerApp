import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoScannerPageRoutingModule } from './alumno-scanner-routing.module';

import { AlumnoScannerPage } from './alumno-scanner.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoScannerPageRoutingModule,
    MaterialModule
  ],
  declarations: [AlumnoScannerPage]
})
export class AlumnoScannerPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeQrPageRoutingModule } from './code-qr-routing.module';

import { CodeQrPage } from './code-qr.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeQrPageRoutingModule,
    MaterialModule
  ],
  declarations: [CodeQrPage]
})
export class CodeQrPageModule {}

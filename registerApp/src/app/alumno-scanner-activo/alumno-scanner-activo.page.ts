import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
@Component({
  selector: 'app-alumno-scanner-activo',
  templateUrl: './alumno-scanner-activo.page.html',
  styleUrls: ['./alumno-scanner-activo.page.scss'],
})
export class AlumnoScannerActivoPage implements OnInit {
  code: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {this.barcodeScanner.scan().then(barcodeData => {
    this.code = barcodeData.text;
    console.log('Barcode data', this.code);
   }).catch(err => {
       console.log('Error', err);
   });
  }

}

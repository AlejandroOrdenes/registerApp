import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  result = null;
  scanActive = false;

  user = JSON.parse(localStorage.getItem("User"))
  userName = this.user.firstName
  Result = JSON.parse(localStorage.getItem("Result"))

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('User');
    if(this.user == null) {
      this.router.navigateByUrl('/login', {replaceUrl: true})
    }
    console.log("User: ", this.user)
    console.log("Result: ", this.result)

    BarcodeScanner.prepare();
  }


  async startScanner() {
    const allowed = await this.checkPermission();
    if (allowed) {
      this.scanActive = true;
      const result = await BarcodeScanner.startScan();
      // document.querySelector('body').classList.add('scanner-active');
      // document.querySelector('div').classList.add('scanner-active');
      if (result.hasContent){
        this.result = result .content;
        this.Result = JSON.parse(localStorage.getItem("Result"))
        this.router.navigate(['/alumno-scanner'])
        this.scanActive = false;
      }
    }
    

  }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true});
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertController.create({
          header:'No permission',
          message:'Please allow camera acces in your seetings',
          buttons: [{
            text: 'No',
            role: 'cancel'
          },
          {
            text: 'Open settings',
            handler: () => {
              BarcodeScanner.openAppSettings();
              resolve(false);
            }
          }]
        });
        await alert.present();
      } else {
        resolve(false);

      }
    });
  }


  // stopScanner(){
  //   BarcodeScanner.stopScan();
  //   this.scanActive = false;
  // }

}







//  const startScan = async () => {
//   // Check camera permission
//   // This is just a simple example, check out the better checks below
//   await BarcodeScanner.checkPermission({ force: true });

//   // make background of WebView transparent
//   // note: if you are using ionic this might not be enough, check below
//   BarcodeScanner.hideBackground();

//   const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

//   // if the result has content
//   if (result.hasContent) {
//     console.log(result.content); // log the raw scanned content
//   }
// };


  // goToAlumnoScanner() {
  //   this.router.navigate(['/alumno-scanner-activo'])
  // }
  // goToAlumnoScannerdes() {
  //   this.router.navigate(['/alumno-scanner'])






  


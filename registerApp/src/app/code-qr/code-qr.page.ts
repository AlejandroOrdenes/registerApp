import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { QRCodeComponent } from 'angularx-qrcode';
import { ɵunwrapSafeValue as unwrapSafeValue } from '@angular/core';

@Component({
  selector: 'app-code-qr',
  templateUrl: './code-qr.page.html',
  styleUrls: ['./code-qr.page.scss'],
})
export class CodeQrPage implements OnInit {

  user = JSON.parse(localStorage.getItem("User"))
  userEmail: string = this.user.email
  qrCodeString = "Quedaste Presente!!"
  visibleQr = false
  qrCodeDownloadLink: SafeUrl = "";
  elementType = 'canvas'
  qrCode: string
  qrState: Boolean = false
  @ViewChild('qrParent') qrParent: QRCodeComponent
 

  

  constructor(private router: Router, private alertController: AlertController, private http: HttpClient, private sanitizer: DomSanitizer) {  }

  ngOnInit() {
    
  }

  goToHome() {
    this.router.navigate(['/home'])
  }

  goToAlumnos(){
    this.router.navigate(['/listado'])
  }


  generateQR() {
    
      this.visibleQr=true
      console.log(this.qrCodeDownloadLink)
    
    
  }

  // convertToBase64(url: string) {
  //   this.http.get(url, { responseType: "blob" }).subscribe(res => {
  //     const reader = new FileReader();
  //     const binaryString = reader.readAsDataURL(res);
  //     reader.onload = (event: any) => {
  //       //Here you can do whatever you want with the base64 String
  //       console.log("File in Base64: ", event.target.result);
        
  //     };

  //     reader.onerror = (event: any) => {
  //       console.log("File could not be read: " + event.target.error.code);
  //     };
  //   });
  // }

// blobToFile(blobUrl, fileName) {
//   const blob = new Blob([blobUrl], {
//     type: "image/png",
//   });

//   const file = new File([blob], fileName + ".png", {
//     type: "image/png",
//     lastModified: Date.now(),
//   });
//   return file;
// }

// private convertBase64ToBlob(Base64Image: string) {
//   const parts = Base64Image.split(";base64,")
//   const imageType = parts[0].split(":")[1]
//   const decodedData = window.atob(parts[1])
//   const uInt8Array = new Uint8Array(decodedData.length)
//   for (let i = 0; i < decodedData.length; ++i) {
//     uInt8Array[i] = decodedData.charCodeAt(i)
//   }
//   return new Blob([uInt8Array], { type: imageType })
// }

// blobToImage = (blob) => {
//   return new Promise(resolve => {
//     const url = URL.createObjectURL(blob)
//     let img = new Image()
//     img.onload = () => {
//       URL.revokeObjectURL(url)
//       resolve(img)
//     }
//     img.src = url
//   })
// }

  async send() {
    // const canvas = document.createElement('canvas');
    // const myBase64 = canvas.toDataURL('qrParent');
    // console.log("QR PARENT" + myBase64);

    // let imgBlob = this.convertBase64ToBlob(myBase64)
    // let file = this.blobToFile(myBase64)
    // console.log(imgBlob)

    // let value = unwrapSafeValue(this.qrCodeDownloadLink)
    // console.log(value)
    // let sliceValue = value.replace('http://localhost:8100/', "")
    // const str2blob = sliceValue => new Blob([sliceValue]);
    // let bb = str2blob(sliceValue)
    // console.log(bb)

    // let blToimg = this.blobToImage(bb)
    // console.log("IMAGEN blb " + blToimg)

    // let bs64: string | ArrayBuffer;
    // const reader1 = new FileReader();
    // reader1.readAsText(bb); 
    // reader1.onloadend = function() {
    //   bs64 = reader1.result;                
    //   console.log(bs64);
    // }    
  
    // let strbs64: string | ArrayBuffer
    // const reader2: FileReader = new FileReader();
    //    reader2.readAsArrayBuffer(bb);
    //    reader2.onload = (e) => {
    //    strbs64 = reader2.result
    //    console.log(strbs64)
    //   }  

    // let replace = value.replace("blob:", "") 
    
    // let b64 = this.convertToBase64(replace)
    let emailObj = {
      userEmail: this.userEmail,
      imgUrl: ("b64")
    }

  this.http.post('http://localhost:3000/users/sendQr',  emailObj)
  .subscribe(res => {

    console.log(res)
    // this.sendAlert("Se envio codigo QR a " + this.userEmail, "QR ENVIADO!!" )
    // console.log("EMAIL ENVIADO")
    
  }, error => {
    console.log(error)
    // this.sendAlert(this.userEmail + " no se encontro!", "Error al enviar QR!!")
  }) 
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  scannQR() {
    let data = {
      userEmail: this.userEmail,
      imgUrl: ("b64")
    }

    this.http.post('http://localhost:3000/users/scanner',  data)
   .subscribe(res => {

    console.log(res)
    this.sendAlert("Se envio codigo QR a " + this.userEmail, "QR ENVIADO!!" )
    console.log("EMAIL ENVIADO")
    
  }, error => {
    console.log(error)
    this.sendAlert(this.userEmail + " no se encontro!", "Error al enviar QR!!")
  }) 
  }

  

  async sendAlert(message, header) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  
}


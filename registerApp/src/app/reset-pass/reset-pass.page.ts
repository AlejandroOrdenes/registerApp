import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  email: String
  hasAccount = false

  reset = new FormGroup({
    emailUser: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private alertController: AlertController, private http: HttpClient) { }

  sendPassword(){

    let emailObj = {
      email: this.email,
    }
    this.http.post('http://192.168.0.2:3000/users/recovery',  emailObj)
    .subscribe(res => {
      
      this.sendAlert("Se envio tu contraseña a " + this.email, "EMAIL ENVIADO!!" )
      
    }, error => {
      console.log(error)
      this.sendAlert(this.email + " no se encontro!", "Error de email!!")
    }) 
  }


  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login'])
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

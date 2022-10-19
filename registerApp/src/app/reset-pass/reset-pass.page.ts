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

  reset = new FormGroup({
    emailUser: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private alertController: AlertController, private http: HttpClient) { }

  sendPassword(){
    this.http.get('http://localhost:3000/users')
    .subscribe(res => {
      console.log(res)
      
    }, error => {
      console.log(error)
      
    })

  }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  async sendAlert() {
    const alert = await this.alertController.create({
      header: 'Correo enviado!',
      message: 'Siga los pasos para restablecer su contraseña',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

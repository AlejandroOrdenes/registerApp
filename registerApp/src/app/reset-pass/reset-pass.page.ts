import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  reset = new FormGroup({
    emailUser: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private alertController: AlertController) { }

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

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

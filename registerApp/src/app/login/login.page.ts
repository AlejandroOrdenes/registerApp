import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import  { Http }  from '@capacitor-community/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  login = new FormGroup({
    user: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error!',
      subHeader: 'Datos de Usuario Incorrectos!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

  logins = async () => {

      const options = {
        url: 'http://192.168.0.2:3000/users/login',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          'Accept':'application/json'

        },
        data: { email: this.email,
                  password: this.password },
      };
    
      const response = await Http.request({ ...options, method: 'POST' })
      console.log("RESPONSE " + JSON.stringify(response))
      console.log(options)

      if(response.status == 401) {
        console.log(response.url);
      } else if (response.status == 200){
        let user = localStorage.setItem("User", JSON.stringify(response.data))
        let rolUsuario = response.data.rol
        console.log("RolUsuario " + rolUsuario)

        if(rolUsuario == "Alumno") {
          this.router.navigateByUrl('alumno', {replaceUrl: true})
        }

        if(rolUsuario == "Profesor") {
          this.router.navigateByUrl('home', {replaceUrl: true})
        }
      }
  }



  goToReset() {
    this.router.navigate(['/reset-pass'])
  }

  // goToHome() {
  //   this.router.navigate(['/home'])
  // }

  goToAlumno(){
    this.router.navigate(['/alumno'])
  }
  goToRegistro(){
    this.router.navigate(['/registro'])
  }
}

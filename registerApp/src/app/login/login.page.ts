import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

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

  constructor(private router: Router, private http: HttpClient, private alertController: AlertController) { }

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

  logins(){
    let credentials = {
      email: this.email,
      password: this.password
    }
    this.http.post('http://localhost:3000/users/login', credentials)
    .subscribe(res => {
      localStorage.setItem('User', JSON.stringify(res))
      
      let user = JSON.parse(localStorage.getItem("User"))
      let rolUsuario = user.rol
      
      if(rolUsuario == "Alumno") {
        this.router.navigateByUrl('alumno', {replaceUrl: true})
      }

      if(rolUsuario == "Profesor") {
        this.router.navigateByUrl('home', {replaceUrl: true})
      }

      
    }, error => {
      console.log(error)
      this.presentAlert()
    })

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

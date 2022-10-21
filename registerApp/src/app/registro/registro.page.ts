import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

 

  email: string
  firstName: string
  lastName: string
  password: string
  rol: string
  imagen: string
  isLoading: boolean = false

  registro = new FormGroup({
    correo: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lastNames: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  })
  
  
  
  constructor(private router: Router,private http:HttpClient, private alertController: AlertController) {
  }
  ngOnInit() {
  }

  register(){
    this.isLoading = true
    let user = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password:this.password,
      rol: this.rol,
      imagen: this.imagen
    }

    this.http.post('http://localhost:3000/users/register',user)
    .subscribe(res=>{
      this.isLoading = false
      localStorage.setItem('User',JSON.stringify(res))
      this.router.navigateByUrl('',{replaceUrl: true})
      console.log(user)
    }, error => {
      this.isLoading = false
      this.presentAlert('Registro fallido!', error.error.error)
      console.log(error)
    })
  }

  async presentAlert(header: string, message:string) { 
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: header,
      message: message,
      buttons: ["OK"]
    });
    await alert.present();

    const {role} = await alert.onDidDismiss();
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }
}
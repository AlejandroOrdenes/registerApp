import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  password: string
  rol: string
  imagen: string
  
  
  registro = new FormGroup({
    'email': new FormControl("", Validators.required),
    'firstName': new FormControl("", Validators.required),
    'lastName': new FormControl("", Validators.required),
    'phoneNumber': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required),
    'rol': new FormControl("", Validators.required),
    'imagen': new FormControl("", Validators.required),
  })
  
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
  }

  register(){
    let user = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      password:this.password,
      rol: this.rol,
      imagen: this.imagen
    }

    this.http.post('http://localhost:3000/users/register',user)
    .subscribe(res=>{
      console.log(user)
    }, error => {
      console.log(error)
    })
  }

}
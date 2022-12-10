import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {


  users:any;
  nonusers: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const user = localStorage.getItem('User')
    this.http.get('http://192.168.0.2:3000/users').subscribe(res =>{
    this.users = res
    console.log(res)

    },error =>{
      console.log(error)
    })
  }

}

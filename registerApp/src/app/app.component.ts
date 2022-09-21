import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HOME', url: '/home', icon: 'home' },
    { title: 'LOGIN', url: '/login', icon: 'people' },

  ];
  constructor() {}
}

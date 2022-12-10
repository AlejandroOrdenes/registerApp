import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { RegistroPage } from './registro.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPage,  ],
      imports: [HttpClientTestingModule, IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Register valid!', () => {

    fixture.detectChanges();
    const correo = component.registro.controls["correo"]
    const name = component.registro.controls["name"]
    const lastNames = component.registro.controls["lastNames"]
    const pass = component.registro.controls["pass"]
    const role = component.registro.controls["role"]
    const image = component.registro.controls["image"]

    correo.setValue('brenda@gmail.com')
    name.setValue('Brenda')
    lastNames.setValue('Matilla')
    pass.setValue('12345aA$')
    role.setValue('Profesor')
    image.setValue('img.png')
    expect(component.registro.invalid).toBeFalse();
  });

});
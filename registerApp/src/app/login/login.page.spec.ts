import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { LoginPage } from './login.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [HttpClientTestingModule, IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login valid!', () => {

    fixture.detectChanges();
    const user = component.login.controls["user"]
    const pass = component.login.controls["pass"]
    user.setValue('brenda@gmail.com')
    pass.setValue('12345')
    expect(component.login.invalid).toBeFalse();
  });
});

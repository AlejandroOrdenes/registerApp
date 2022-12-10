import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { CodeQrPage } from './code-qr.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CodeQrPage', () => {
  let component: CodeQrPage;
  let fixture: ComponentFixture<CodeQrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeQrPage,  ],
      imports: [HttpClientTestingModule, IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   component.user = {}
  //   expect(component).toBeTruthy();
  // });
});
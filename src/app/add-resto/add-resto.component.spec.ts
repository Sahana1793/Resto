import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddRestoComponent } from './add-resto.component';

describe('AddRestoComponent', () => {
  let component: AddRestoComponent;
  let fixture: ComponentFixture<AddRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestoComponent ],
      imports:[
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ListRestoComponent } from './list-resto.component';

describe('ListRestoComponent', () => {
  let component: ListRestoComponent;
  let fixture: ComponentFixture<ListRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRestoComponent ],
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
    fixture = TestBed.createComponent(ListRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

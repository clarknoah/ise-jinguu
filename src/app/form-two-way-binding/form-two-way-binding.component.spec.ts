/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormTwoWayBindingComponent } from './form-two-way-binding.component';

describe('FormTwoWayBindingComponent', () => {
  let component: FormTwoWayBindingComponent;
  let fixture: ComponentFixture<FormTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

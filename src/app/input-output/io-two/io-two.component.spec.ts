/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IoTwoComponent } from './io-two.component';

describe('IoTwoComponent', () => {
  let component: IoTwoComponent;
  let fixture: ComponentFixture<IoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

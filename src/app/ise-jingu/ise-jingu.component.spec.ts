/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IseJinguComponent } from './ise-jingu.component';

describe('IseJinguComponent', () => {
  let component: IseJinguComponent;
  let fixture: ComponentFixture<IseJinguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseJinguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseJinguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

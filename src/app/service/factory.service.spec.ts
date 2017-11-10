/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FactoryService } from './factory.service';

describe('FactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactoryService]
    });
  });

  it('should ...', inject([FactoryService], (service: FactoryService) => {
    expect(service).toBeTruthy();
  }));
});

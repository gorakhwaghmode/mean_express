import { TestBed, inject } from '@angular/core/testing';

import { RvService } from './rv.service';

describe('RvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RvService]
    });
  });

  it('should be created', inject([RvService], (service: RvService) => {
    expect(service).toBeTruthy();
  }));
});

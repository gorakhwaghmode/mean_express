import { TestBed, inject } from '@angular/core/testing';

import { LgnService } from './lgn.service';

describe('LgnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LgnService]
    });
  });

  it('should be created', inject([LgnService], (service: LgnService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { BakeryService } from './bakery.service';

describe('BakeryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BakeryService]
    });
  });

  it('should be created', inject([BakeryService], (service: BakeryService) => {
    expect(service).toBeTruthy();
  }));
});

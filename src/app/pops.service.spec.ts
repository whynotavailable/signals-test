import { TestBed } from '@angular/core/testing';

import { PopsService } from './pops.service';

describe('PopsService', () => {
  let service: PopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BioterioService } from './bioterio.service';

describe('BioterioService', () => {
  let service: BioterioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioterioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

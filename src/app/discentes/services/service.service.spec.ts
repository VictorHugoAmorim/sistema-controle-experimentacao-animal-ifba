import { TestBed } from '@angular/core/testing';

import { DiscentesService } from './discentes.service';

describe('DiscentesService', () => {
  let service: DiscentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

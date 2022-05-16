import { TestBed } from '@angular/core/testing';

import { ResquestResponseService } from './resquest-response.service';

describe('ResquestResponseService', () => {
  let service: ResquestResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResquestResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CfdService } from './cfd.service';

describe('CfdService', () => {
  let service: CfdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

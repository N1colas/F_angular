import { TestBed } from '@angular/core/testing';

import { UserMiddlewareService } from './user-middleware.service';

describe('UserMiddlewareService', () => {
  let service: UserMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { XplanetService } from './xplanet.service';

describe('XplanetService', () => {
  let service: XplanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XplanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

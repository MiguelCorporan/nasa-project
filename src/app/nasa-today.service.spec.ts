import { TestBed } from '@angular/core/testing';

import { NasaTodayService } from './nasa-today.service';

describe('NasaTodayService', () => {
  let service: NasaTodayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaTodayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

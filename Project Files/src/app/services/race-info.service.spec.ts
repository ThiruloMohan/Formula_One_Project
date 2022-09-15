import { TestBed } from '@angular/core/testing';

import { RaceInfoService } from './race-info.service';

describe('RaceInfoService', () => {
  let service: RaceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

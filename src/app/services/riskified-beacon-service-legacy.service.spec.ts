import { TestBed } from '@angular/core/testing';

import { RiskifiedBeaconServiceLegacyService } from './riskified-beacon-service-legacy.service';

describe('RiskifiedBeaconServiceLegacyService', () => {
  let service: RiskifiedBeaconServiceLegacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskifiedBeaconServiceLegacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

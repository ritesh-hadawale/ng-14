import { TestBed } from '@angular/core/testing';

import { BoldchatService } from './boldchat.service';

describe('BoldchatService', () => {
  let service: BoldchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoldchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

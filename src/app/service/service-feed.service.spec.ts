import { TestBed } from '@angular/core/testing';

import { ServiceFeedService } from './service-feed.service';

describe('ServiceFeedService', () => {
  let service: ServiceFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

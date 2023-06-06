import { TestBed } from '@angular/core/testing';

import { GraphTimeService } from './graph-time.service';

describe('GraphTimeService', () => {
  let service: GraphTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

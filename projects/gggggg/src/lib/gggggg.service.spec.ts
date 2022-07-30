import { TestBed } from '@angular/core/testing';

import { GgggggService } from './gggggg.service';

describe('GgggggService', () => {
  let service: GgggggService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GgggggService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

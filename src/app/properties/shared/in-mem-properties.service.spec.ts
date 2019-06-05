import { TestBed } from '@angular/core/testing';

import { InMemPropertiesService } from './in-mem-properties.service';

describe('InMemPropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemPropertiesService = TestBed.get(InMemPropertiesService);
    expect(service).toBeTruthy();
  });
});

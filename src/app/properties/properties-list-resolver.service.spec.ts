import { TestBed } from '@angular/core/testing';

import { PropertiesListResolverService } from './properties-list-resolver.service';

describe('PropertiesListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertiesListResolverService = TestBed.get(PropertiesListResolverService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PropertiesDataService } from './properties-data.service';

describe('PropertiesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertiesDataService = TestBed.get(PropertiesDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PropertiesRouteActivatorService } from './properties-route-activator.service';

describe('PropertiesRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertiesRouteActivatorService = TestBed.get(PropertiesRouteActivatorService);
    expect(service).toBeTruthy();
  });
});

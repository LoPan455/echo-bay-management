import { TestBed } from '@angular/core/testing';

import { ClientsDataServiceService } from './clients-data-service.service';

describe('ClientsDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsDataServiceService = TestBed.get(ClientsDataServiceService);
    expect(service).toBeTruthy();
  });
});

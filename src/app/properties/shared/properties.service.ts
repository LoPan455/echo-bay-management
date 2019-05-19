import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  getProperties() {
    return PROPERTY_HOLDINGS;
  }

  constructor() {
  }
}

const PROPERTY_HOLDINGS = [
  {
    "id": 1,
    "name": "Minneapolis Charter School",
    "address": {
      "street_address": "123 Johnson Blvd",
      "street_address_2": "",
      "city": "Minneapolis",
      "state": "Minnesota",
      "zipcode": "55408"
    },
    "market_value": 500000,
    "tenant": "STEM Charters, LLC",
    "likes": 0
  },
  {
    "id": 2,
    "name": "Excel Academy",
    "address": {
      "street_address": "4500 Technology Drive",
      "street_address_2": "",
      "city": "Eden Prairie",
      "state": "Minnesota",
      "zipcode": "55344"
    },
    "market_value": 125000,
    "tenant": "R&R Education, Inc",
    "likes": 0
  },
  {
    "id": 3,
    "name": "Spanish Adventures",
    "address": {
      "street_address": "600 Highway 7",
      "street_address_2": "",
      "city": "St. Louis Park",
      "state": "Minnesota",
      "zipcode": "55402"
    },
    "market_value": 1780000,
    "tenant": "Scott Smith Ventures, LLC",
    "likes": 0
  }
];

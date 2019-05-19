import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  getProperties(){
    return  PROPERTY_HOLDING;
  }

  constructor() { }
}

const PROPERTY_HOLDING = {
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
};

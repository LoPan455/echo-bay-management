import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  constructor() { }
  createDb() {
    const properties = [
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
          "street_address": "456 Elm Street",
          "street_address_2": "",
          "city": "Chanhassen",
          "state": "Minnesota",
          "zipcode": "55331"
        },
        "market_value": 125000,
        "tenant": "Math for Skakespeare Majors, Inc.",
        "likes": 0
      }
    ];
    return { properties} ;
  }
}

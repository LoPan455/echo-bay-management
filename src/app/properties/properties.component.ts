import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass']
})
export class PropertiesComponent implements OnInit {

  property_holding = {
    "name": "Minneapolis Charter School",
    "address": {
      "street_address": "123 Johnson Blvd",
      "street_address_2": "",
      "city": "Minneapolis",
      "state": "Minnesota",
      "zipcode": "55408"
    },
    "market_value": 500000,
    "tenant": "STEM Charters, LLC"
  };

  constructor() { }

  ngOnInit() {
  }

}

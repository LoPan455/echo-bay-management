import {Component, OnInit, Output} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass']
})
export class PropertiesComponent implements OnInit {

  totalPropertyLikes:number = 0;

  propertyHolding = {
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

  handleLiked(data) {
    this.totalPropertyLikes++;
    console.log('total property likes: ', this.totalPropertyLikes);
    console.log('Proprty liked ',data);
  }

  constructor() { }

  ngOnInit() {
  }

}

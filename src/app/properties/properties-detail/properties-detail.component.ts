import { Component, OnInit } from '@angular/core';
import {PropertiesDataService} from "../shared/properties-data.service";

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.sass']
})
export class PropertiesDetailComponent implements OnInit {

  propertyHolding:any;

  constructor(private propertiesService:PropertiesDataService) { }

  ngOnInit() {
    this.propertyHolding = this.propertiesService.getEvent(1);

  }

}

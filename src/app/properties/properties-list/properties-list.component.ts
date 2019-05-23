import { Component, OnInit } from '@angular/core';
import { PropertiesDataService } from '../shared/properties-data.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.sass']
})
export class PropertiesListComponent implements OnInit {

  totalPropertyLikes:number = 0;
  propertyHoldings:any;

  handleLiked(data) {
    this.totalPropertyLikes++;
    console.log('total property likes: ', this.totalPropertyLikes);
    console.log('Property liked ',data);
  }

  constructor(private propertiesService: PropertiesDataService) { }

  ngOnInit() {
    this.propertyHoldings = this.propertiesService.getProperties()
  }

}

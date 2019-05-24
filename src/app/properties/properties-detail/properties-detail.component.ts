import {Component, OnInit} from '@angular/core';
import {PropertiesService} from "../shared/properties.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.sass']
})
export class PropertiesDetailComponent implements OnInit {

  propertyHolding: any;

  constructor(
    private propertiesService: PropertiesService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.propertyHolding = this.propertiesService.getEvent(+this.route.snapshot.params['id']);
  }

}

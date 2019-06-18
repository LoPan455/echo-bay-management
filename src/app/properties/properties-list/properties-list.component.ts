import {Component, OnInit} from '@angular/core';
import {PropertiesService} from '../shared/properties.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProperty} from "../shared";

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.sass']
})
export class PropertiesListComponent implements OnInit {

  totalPropertyLikes: number = 0;
  propertyHoldings: IProperty[];

  handleLiked(data) {
    this.totalPropertyLikes++;
    console.log('total property likes: ', this.totalPropertyLikes);
    console.log('Property liked ', data);
  }

  addProperty() {
    this.router.navigate(['/properties/new'])
  }

  constructor(
    private propertiesService: PropertiesService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.propertiesService.getProperties().subscribe(response => this.propertyHoldings = response);
  }

}

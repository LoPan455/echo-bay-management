import {Component, OnInit} from '@angular/core';
import {PropertiesService} from '../shared/properties.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.sass']
})
export class PropertiesListComponent implements OnInit {

  totalPropertyLikes: number = 0;
  propertyHoldings: any;

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
    this.propertyHoldings = this.route.snapshot.data['propertyHoldings'];
  }

}

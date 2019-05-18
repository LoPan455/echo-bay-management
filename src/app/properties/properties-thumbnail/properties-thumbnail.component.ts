import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-properties-thumbnail',
  templateUrl: './properties-thumbnail.component.html',
  styleUrls: ['./properties-thumbnail.component.sass']
})
export class PropertiesThumbnailComponent implements OnInit {

  @Input() propertyHolding: any;
  @Output() liked = new EventEmitter;

  likes:number = 0;

  likeProperty() {
    this.likes++;
    console.log("Property liked!");
    this.liked.emit(this.propertyHolding);
  }

  logFoo(){
    console.log('Foo...');
  }



  constructor() { }

  ngOnInit() {
  }

}

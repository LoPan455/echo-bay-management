import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.sass']
})
export class DealsListComponent implements OnInit {

  url: string = 'https://echo-bay-management.s3.amazonaws.com/Thule_Rapid_Traverse_Foot_Pack_480R_v03.pdf';

  constructor() { }

  ngOnInit() {
  }

}

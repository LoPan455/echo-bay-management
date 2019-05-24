import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.sass']
})
export class CreatePropertyComponent implements OnInit {

  cancel() {
    console.log('Cancelled');
    this.router.navigate(['/properties'])
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

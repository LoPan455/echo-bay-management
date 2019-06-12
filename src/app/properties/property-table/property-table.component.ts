import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PropertyTableDataSource } from './property-table-datasource';
import {PropertiesService} from '../shared';

@Component({
  selector: 'app-property-table',
  templateUrl: './property-table.component.html',
  styleUrls: ['./property-table.component.css']
})
export class PropertyTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PropertyTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private propertiesService: PropertiesService) {
  }


  ngAfterViewInit() {
    this.dataSource = new PropertyTableDataSource(
      this.paginator,
      this.sort,
      this.propertiesService
      );
  }
}

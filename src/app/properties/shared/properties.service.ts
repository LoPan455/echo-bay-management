import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IProperty} from "./properties.model";
import {map} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private propertiesUrl = 'api/properties';

  // getEvent(id: number) {
  //   this.getProperties().subscri//  //
  //   PROPERTY_HOLDINGS.find(propertyHolding => propertyHolding.id === id)
  // }

  getProperties(): Observable<any> {
    return this.http.get(`${this.propertiesUrl}`)
  }

  constructor(private http: HttpClient) {}

}

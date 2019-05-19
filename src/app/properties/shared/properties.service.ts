import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  propertiesUrl:string = `api/properties`;

  getProperties(): Observable<string> {
    return this.http.get(this.propertiesUrl, {responseType: 'text'});
  }

  constructor(private http: HttpClient) {
  }
}

// const PROPERTY_HOLDING = {
//   "id": 1,
//   "name": "Minneapolis Charter School",
//   "address": {
//     "street_address": "123 Johnson Blvd",
//     "street_address_2": "",
//     "city": "Minneapolis",
//     "state": "Minnesota",
//     "zipcode": "55408"
//   },
//   "market_value": 500000,
//   "tenant": "STEM Charters, LLC",
//   "likes": 0
// };

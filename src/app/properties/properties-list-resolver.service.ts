import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PropertiesService} from './shared/properties.service';
import {map} from 'rxjs/operators';
import {InMemPropertiesService} from './shared/in-mem-properties.service';
import {IProperty} from './shared';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertiesListResolverService implements Resolve<any>{

  propertiesEndpoint = 'properties';
  base_url = 'http://fakebakend.com/api/';

  constructor(private propertiesService:PropertiesService, private inMemPropertiesService: InMemPropertiesService, private http: HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.http.get(this.base_url + this.propertiesEndpoint).pipe(map(properties => properties));
  }



  // resolve(route: ActivatedRouteSnapshot,
  //         state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  //   return this.propertiesService.getProperties().pipe(map(properties => properties));
  // }


}

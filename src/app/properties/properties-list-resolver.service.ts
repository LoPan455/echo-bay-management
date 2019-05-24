import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PropertiesService} from './shared/properties.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertiesListResolverService implements Resolve<any>{

  constructor(private propertiesService:PropertiesService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.propertiesService.getProperties().pipe(map(properties => properties));
  }
}

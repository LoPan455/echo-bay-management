import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {PropertiesService} from './shared/properties.service';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PropertiesRouteActivatorService implements CanActivate {

  constructor(private propertiesService:PropertiesService,
              private router:Router) {

}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const eventExists = !!this.propertiesService.getEvent(+route.params['id']);
    if(!eventExists) {
      this.router.navigate(['/404'])
    }
    return eventExists;
  }
}

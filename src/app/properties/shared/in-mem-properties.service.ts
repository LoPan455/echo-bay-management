import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {RequestInfo} from 'angular-in-memory-web-api';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InMemPropertiesService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const properties = [
      {
        id: 1,
        name: "Minneapolis Charter School",
        address: {
          street_address: "123 Johnson Blvd",
          street_address_2: "",
          city: "Minneapolis",
          state: "Minnesota",
          zipcode: "55408"
        },
        market_value: 500000,
        tenant: "STEM Charters, LLC",
        likes: 0,
        details: "Vestibulum facilisis posuere tristique. Aliquam erat volutpat. Morbi vehicula erat non sagittis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam lorem ligula, ullamcorper ac elit vel, vestibulum aliquam quam. Aenean dapibus luctus rutrum. Curabitur hendrerit tincidunt nibh et pharetra. Curabitur mi erat, sagittis et ultricies eget, varius ut felis. Donec porta vulputate turpis nec ultrices. Praesent bibendum ac sapien in dictum. Vestibulum sed magna vel quam iaculis malesuada vel eu elit. Maecenas iaculis iaculis ante vitae consectetur. Integer pulvinar turpis sit amet nunc consequat maximus. Maecenas iaculis lectus mi, eu rhoncus sapien eleifend ut."
      },
      {
        id: 2,
        name: "Excel Academy",
        address: {
          street_address: "4500 Technology Drive",
          street_address_2: "",
          city: "Eden Prairie",
          state: "Minnesota",
          zipcode: "55344"
        },
        market_value: 125000,
        tenant: "R&R Education, Inc",
        likes: 0,
        details: "Donec at enim dui. Donec eleifend purus non lacus pulvinar varius. In nec lacinia enim. Phasellus mattis consectetur odio, in lobortis nulla feugiat eu. Phasellus mattis rutrum augue, sed consectetur massa lacinia nec. Phasellus dignissim dui id semper convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ut laoreet ante, nec facilisis velit. Nulla facilisi. Proin neque ante, aliquet eget velit eu, dictum eleifend nisi. Nulla at justo magna. Ut ac libero mi. Suspendisse potenti. Etiam suscipit, mi pretium consequat tempor, urna lectus porttitor arcu, ac vehicula purus ligula et justo. Pellentesque lobortis nisl in cursus molestie."
      },
      {
        id: 3,
        name: "Spanish Adventures",
        address: {
          street_address: "600 Highway 7",
          street_address_2: "",
          city: "St. Louis Park",
          state: "Minnesota",
          zipcode: "55402"
        },
        market_value: 1780000,
        tenant: "Scott Smith Ventures, LLC",
        likes: 0,
        details: "Aenean auctor molestie nulla, eget posuere risus tincidunt convallis. Quisque aliquam ac nunc eu rutrum. Praesent commodo elit nisi. Etiam elementum eleifend risus, in ullamcorper ligula bibendum vel. Aliquam scelerisque hendrerit pulvinar. Donec eu neque sit amet enim posuere placerat. Maecenas faucibus venenatis neque non rhoncus. Nulla sagittis ut odio eget feugiat. Quisque laoreet, nunc in malesuada dapibus, sapien mauris venenatis erat, pretium ullamcorper risus purus ac diam. Nullam a justo ac orci imperdiet sagittis. Curabitur eget finibus sapien."
      }
    ];

    let returnType = 'observable';

    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        properties.length = 0;
      }
      returnType = body.returnType || 'object';
    }
    const db = {properties};

    switch (returnType) {
      case ('observable'):
        return of(db).pipe(delay(10));
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
  }

  constructor() {
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsDataServiceService {

  getClients() {
    return CLIENTS;
  }

  constructor() { }

}

const CLIENTS = [
  {
    "id": 1,
    "name": "STEM Charters, LLC",
    "contact": "Tucker McKenzie",
    "properties": [1],
    "detail": "Vestibulum facilisis posuere tristique. Aliquam erat volutpat. Morbi vehicula erat non sagittis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam lorem ligula, ullamcorper ac elit vel, vestibulum aliquam quam. Aenean dapibus luctus rutrum. Curabitur hendrerit tincidunt nibh et pharetra. Curabitur mi erat, sagittis et ultricies eget, varius ut felis. Donec porta vulputate turpis nec ultrices. Praesent bibendum ac sapien in dictum. Vestibulum sed magna vel quam iaculis malesuada vel eu elit. Maecenas iaculis iaculis ante vitae consectetur. Integer pulvinar turpis sit amet nunc consequat maximus. Maecenas iaculis lectus mi, eu rhoncus sapien eleifend ut."
  },
  {
    "id": 2,
    "name": "Excel Academy",
    "contact": "Susan Johnson",
    "properties": [2],
    "detail": "Donec at enim dui. Donec eleifend purus non lacus pulvinar varius. In nec lacinia enim. Phasellus mattis consectetur odio, in lobortis nulla feugiat eu. Phasellus mattis rutrum augue, sed consectetur massa lacinia nec. Phasellus dignissim dui id semper convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ut laoreet ante, nec facilisis velit. Nulla facilisi. Proin neque ante, aliquet eget velit eu, dictum eleifend nisi. Nulla at justo magna. Ut ac libero mi. Suspendisse potenti. Etiam suscipit, mi pretium consequat tempor, urna lectus porttitor arcu, ac vehicula purus ligula et justo. Pellentesque lobortis nisl in cursus molestie"
  },
  {
    "id": 3,
    "name": "Scott Smith Ventures, LLC",
    "contact": "James Thorpe",
    "properties": [3],
    "detail": "Donec at enim dui. Donec eleifend purus non lacus pulvinar varius. In nec lacinia enim. Phasellus mattis consectetur odio, in lobortis nulla feugiat eu. Phasellus mattis rutrum augue, sed consectetur massa lacinia nec. Phasellus dignissim dui id semper convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ut laoreet ante, nec facilisis velit. Nulla facilisi. Proin neque ante, aliquet eget velit eu, dictum eleifend nisi. Nulla at justo magna. Ut ac libero mi. Suspendisse potenti. Etiam suscipit, mi pretium consequat tempor, urna lectus porttitor arcu, ac vehicula purus ligula et justo. Pellentesque lobortis nisl in cursus molestie"
  }
];

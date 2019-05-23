import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsThumbnailComponent } from './clients-thumbnail.component';

describe('ClientsThumbnailComponent', () => {
  let component: ClientsThumbnailComponent;
  let fixture: ComponentFixture<ClientsThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

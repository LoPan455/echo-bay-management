import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesThumbnailComponent } from './properties-thumbnail.component';

describe('PropertiesThumbnailComponent', () => {
  let component: PropertiesThumbnailComponent;
  let fixture: ComponentFixture<PropertiesThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoMapComponent } from './expo-map.component';

describe('ExpoMapComponent', () => {
  let component: ExpoMapComponent;
  let fixture: ComponentFixture<ExpoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

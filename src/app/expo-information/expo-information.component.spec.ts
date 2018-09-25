import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoInformationComponent } from './expo-information.component';

describe('ExpoInformationComponent', () => {
  let component: ExpoInformationComponent;
  let fixture: ComponentFixture<ExpoInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

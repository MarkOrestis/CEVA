import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpoMapComponent } from './create-expo-map.component';

describe('CreateExpoMapComponent', () => {
  let component: CreateExpoMapComponent;
  let fixture: ComponentFixture<CreateExpoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExpoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

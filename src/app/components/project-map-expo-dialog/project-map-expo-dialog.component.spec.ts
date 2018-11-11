import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMapExpoDialogComponent } from './project-map-expo-dialog.component';

describe('ProjectMapExpoDialogComponent', () => {
  let component: ProjectMapExpoDialogComponent;
  let fixture: ComponentFixture<ProjectMapExpoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMapExpoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMapExpoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

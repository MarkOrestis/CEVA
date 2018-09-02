import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteConfirmationDialogComponent } from './vote-confirmation-dialog.component';

describe('VoteConfirmationDialogComponent', () => {
  let component: VoteConfirmationDialogComponent;
  let fixture: ComponentFixture<VoteConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentConfirmationDialogComponent } from './comment-confirmation-dialog.component';

describe('CommentConfirmationDialogComponent', () => {
  let component: CommentConfirmationDialogComponent;
  let fixture: ComponentFixture<CommentConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

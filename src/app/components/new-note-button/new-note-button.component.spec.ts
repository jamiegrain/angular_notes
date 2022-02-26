import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteButtonComponent } from './new-note-button.component';

describe('NewNoteButtonComponent', () => {
  let component: NewNoteButtonComponent;
  let fixture: ComponentFixture<NewNoteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNoteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

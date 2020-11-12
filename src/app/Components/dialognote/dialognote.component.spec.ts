import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialognoteComponent } from './dialognote.component';

describe('DialognoteComponent', () => {
  let component: DialognoteComponent;
  let fixture: ComponentFixture<DialognoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialognoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialognoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivenotesComponent } from './archivenotes.component';

describe('ArchivenotesComponent', () => {
  let component: ArchivenotesComponent;
  let fixture: ComponentFixture<ArchivenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivenotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

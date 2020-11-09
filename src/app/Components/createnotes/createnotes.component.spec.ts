import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenotesComponent } from './createnotes.component';

describe('CreatenotesComponent', () => {
  let component: CreatenotesComponent;
  let fixture: ComponentFixture<CreatenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

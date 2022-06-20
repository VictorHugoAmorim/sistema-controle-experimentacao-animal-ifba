import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscenteDialogComponent } from './discente-dialog.component';

describe('DiscenteDialogComponent', () => {
  let component: DiscenteDialogComponent;
  let fixture: ComponentFixture<DiscenteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscenteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscenteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

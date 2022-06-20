import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteDialogComponent } from './docente-dialog.component';

describe('DocenteDialogComponent', () => {
  let component: DocenteDialogComponent;
  let fixture: ComponentFixture<DocenteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

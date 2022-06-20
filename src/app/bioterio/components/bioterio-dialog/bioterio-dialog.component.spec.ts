import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioterioDialogComponent } from './bioterio-dialog.component';

describe('BioterioDialogComponent', () => {
  let component: BioterioDialogComponent;
  let fixture: ComponentFixture<BioterioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioterioDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioterioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

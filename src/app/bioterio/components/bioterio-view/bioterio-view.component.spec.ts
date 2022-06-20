import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioterioViewComponent } from './bioterio-view.component';

describe('BioterioViewComponent', () => {
  let component: BioterioViewComponent;
  let fixture: ComponentFixture<BioterioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioterioViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioterioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

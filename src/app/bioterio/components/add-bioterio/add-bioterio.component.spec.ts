import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBioterioComponent } from './add-bioterio.component';

describe('AddBioterioComponent', () => {
  let component: AddBioterioComponent;
  let fixture: ComponentFixture<AddBioterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBioterioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBioterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscenteComponent } from './add-discente.component';

describe('AddDiscenteComponent', () => {
  let component: AddDiscenteComponent;
  let fixture: ComponentFixture<AddDiscenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

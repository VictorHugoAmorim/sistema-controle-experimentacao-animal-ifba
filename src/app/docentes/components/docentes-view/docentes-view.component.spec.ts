import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesViewComponent } from './docentes-view.component';

describe('DocentesViewComponent', () => {
  let component: DocentesViewComponent;
  let fixture: ComponentFixture<DocentesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

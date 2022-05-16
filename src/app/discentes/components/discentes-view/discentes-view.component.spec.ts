import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscentesViewComponent } from './discentes-view.component';

describe('DiscentesViewComponent', () => {
  let component: DiscentesViewComponent;
  let fixture: ComponentFixture<DiscentesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscentesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscentesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimaisComponent } from './list-animais.component';

describe('ListAnimaisComponent', () => {
  let component: ListAnimaisComponent;
  let fixture: ComponentFixture<ListAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

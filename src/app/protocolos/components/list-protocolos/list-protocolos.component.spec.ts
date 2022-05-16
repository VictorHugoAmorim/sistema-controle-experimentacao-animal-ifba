import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProtocolosComponent } from './list-protocolos.component';

describe('ListProtocolosComponent', () => {
  let component: ListProtocolosComponent;
  let fixture: ComponentFixture<ListProtocolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProtocolosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProtocolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

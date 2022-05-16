import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBioterioComponent } from './list-bioterio.component';

describe('ListBioterioComponent', () => {
  let component: ListBioterioComponent;
  let fixture: ComponentFixture<ListBioterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBioterioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBioterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

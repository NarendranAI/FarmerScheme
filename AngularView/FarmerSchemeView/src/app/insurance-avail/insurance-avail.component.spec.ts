import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAvailComponent } from './insurance-avail.component';

describe('InsuranceAvailComponent', () => {
  let component: InsuranceAvailComponent;
  let fixture: ComponentFixture<InsuranceAvailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceAvailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

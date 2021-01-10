import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderPageComponent } from './bidder-page.component';

describe('BidderPageComponent', () => {
  let component: BidderPageComponent;
  let fixture: ComponentFixture<BidderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

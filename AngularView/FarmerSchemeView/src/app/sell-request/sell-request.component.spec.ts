import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRequestComponent } from './sell-request.component';

describe('SellRequestComponent', () => {
  let component: SellRequestComponent;
  let fixture: ComponentFixture<SellRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

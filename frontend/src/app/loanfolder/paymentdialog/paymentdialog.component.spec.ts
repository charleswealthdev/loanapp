import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdialogComponent } from './paymentdialog.component';

describe('PaymentdialogComponent', () => {
  let component: PaymentdialogComponent;
  let fixture: ComponentFixture<PaymentdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

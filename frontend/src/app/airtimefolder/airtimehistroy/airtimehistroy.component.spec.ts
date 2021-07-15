import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimehistroyComponent } from './airtimehistroy.component';

describe('AirtimehistroyComponent', () => {
  let component: AirtimehistroyComponent;
  let fixture: ComponentFixture<AirtimehistroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtimehistroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimehistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

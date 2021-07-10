import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashloanComponent } from './cashloan.component';

describe('CashloanComponent', () => {
  let component: CashloanComponent;
  let fixture: ComponentFixture<CashloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

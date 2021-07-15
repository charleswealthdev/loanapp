import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabundlesComponent } from './databundles.component';

describe('DatabundlesComponent', () => {
  let component: DatabundlesComponent;
  let fixture: ComponentFixture<DatabundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

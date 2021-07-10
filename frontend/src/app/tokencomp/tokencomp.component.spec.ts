import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokencompComponent } from './tokencomp.component';

describe('TokencompComponent', () => {
  let component: TokencompComponent;
  let fixture: ComponentFixture<TokencompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokencompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokencompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

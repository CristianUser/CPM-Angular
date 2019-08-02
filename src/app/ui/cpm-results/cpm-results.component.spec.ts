import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmResultsComponent } from './cpm-results.component';

describe('CpmResultsComponent', () => {
  let component: CpmResultsComponent;
  let fixture: ComponentFixture<CpmResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

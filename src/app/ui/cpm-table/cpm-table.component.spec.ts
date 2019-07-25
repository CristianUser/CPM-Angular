import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmTableComponent } from './cpm-table.component';

describe('CpmTableComponent', () => {
  let component: CpmTableComponent;
  let fixture: ComponentFixture<CpmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

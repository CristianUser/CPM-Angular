import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmAutocompleteComponent } from './cpm-autocomplete.component';

describe('CpmAutocompleteComponent', () => {
  let component: CpmAutocompleteComponent;
  let fixture: ComponentFixture<CpmAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

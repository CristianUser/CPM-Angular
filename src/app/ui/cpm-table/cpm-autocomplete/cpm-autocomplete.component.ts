import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Activity } from 'src/app/classes/IActivity.interface';

@Component({
  selector: 'app-cpm-autocomplete',
  templateUrl: './cpm-autocomplete.component.html',
  styleUrls: ['./cpm-autocomplete.component.scss']
})
export class CpmAutocompleteComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  selectedItem: Activity;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemCtrl = new FormControl();
  filteredItems: Observable<Activity[]>;
  @Input() setitems: Activity[] = [];
  items: Activity[] = [];
  @Input() allItems: Activity[] = [];
  @Output() onChange= new EventEmitter<Activity[]>();

  @ViewChild('itemInput', {static: false}) itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(''),
      map(value => (value) ? typeof value === 'string' ? value : value.name : null),
      map(name => name ? this._filter(name) : this.allItems.slice()));
  }

  ngOnInit() {
    // console.log(this.items)
    this.items.push(...this.setitems)
  }

  add(event: MatChipInputEvent): void {
    // Add item only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    // console.log(event)
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if (!this.items.includes(this.selectedItem)) {
        // this.items.push(this.selectedItem);
      }
      if (input) {
        input.value = '';
      }
      this.itemCtrl.setValue('');
    }
  }

  remove(item: Activity): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.value);
    this.onChange.emit(this.items);
    this.selectedItem = event.option.value;
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
  }

  displayFn(activity?: Activity): string | undefined {
    return activity ? activity.name : undefined;
  }

  private _filter(value: string): Activity[] {
    const filterValue = value.toLowerCase();

    return this.allItems.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
  }
}

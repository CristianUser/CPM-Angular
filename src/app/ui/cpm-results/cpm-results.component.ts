import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpm-results',
  templateUrl: './cpm-results.component.html',
  styleUrls: ['./cpm-results.component.scss']
})
export class CpmResultsComponent implements OnInit {

  constructor() { }
  @Input() budget: number[] = [];

  ngOnInit() {
  }

}

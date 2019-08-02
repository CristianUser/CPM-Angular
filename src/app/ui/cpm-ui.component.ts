import { Component, OnInit } from '@angular/core';
import { Activity } from '../classes/IActivity.interface';

@Component({
  selector: 'app-cpm-ui',
  templateUrl: './cpm-ui.component.html',
  styleUrls: ['./cpm-ui.component.scss']
})
export class CpmUiComponent implements OnInit {
  administrativeCosts = 0;
  criticalPath: Activity[];
  events: string[] = [];
  opened: boolean;
  budget: Array<Activity[]> = [];

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor() { }

  ngOnInit() {
  }
  _onResults($event) {
    console.log($event)
    this.budget = $event.budget;
  }

}

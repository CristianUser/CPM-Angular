import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpm-ui',
  templateUrl: './cpm-ui.component.html',
  styleUrls: ['./cpm-ui.component.scss']
})
export class CpmUiComponent implements OnInit {
  administrativeCosts = 0;
  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor() { }

  ngOnInit() {
  }

}

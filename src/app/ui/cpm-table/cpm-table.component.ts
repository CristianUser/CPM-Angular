import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/interfaces/IActivity.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-cpm-table',
  templateUrl: './cpm-table.component.html',
  styleUrls: ['./cpm-table.component.scss']
})
export class CpmTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  activities: Activity[] = [
    {
      id: 0,
      name: '',
      isSet: false
    }
    // {
    //     id: 0,
    //     name: 'A',
    //     duration: 10,
    //     cost: 100000
    // },
    // {
    //     id: 1,
    //     name: 'B',
    //     duration: 5,
    //     cost: 400000
    // },
    // {
    //     id: 2,
    //     name: 'C',
    //     duration: 6,
    //     requirements: [0, 1],
    //     cost: 100000
    // },
    // {
    //     id: 3,
    //     name: 'F',
    //     duration: 8,
    //     requirements: [2],
    //     cost: 150000
    // },
    // {
    //     id: 4,
    //     name: 'G',
    //     duration: 10,
    //     requirements: [2],
    //     cost: 200000
    // },
    // {
    //     id: 5,
    //     name: 'H',
    //     duration: 2,
    //     requirements: [3, 4],
    //     cost: 50000
    // }
];
  constructor() { }

  ngOnInit() {
  }

  getActivityById(id: number) {
    return this.activities.filter(val => val.id === id)[0];
  }

  getRequirementActivities(id: number) {
    const activities = [];
    if (this.activities[id].requirements) {
      for (const activity of this.activities[id].requirements) {
       activities.push(this.activities.filter(item => item.id === activity )[0]);
      }
      return activities;
    }
    return [];
  }

  changeValue($event, data, path) {
    this.activities[data][path] = $event.target.value;
    this.activities[data].isSet = true;

    if (!this.activities.some(val => val.isSet === false)) {
      this.activities = [...this.activities,
        {
          id: this.activities.length,
          name: '',
          isSet: false
        }];
      }
  }

}

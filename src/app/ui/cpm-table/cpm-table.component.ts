import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/classes/IActivity.interface';


@Component({
  selector: 'app-cpm-table',
  templateUrl: './cpm-table.component.html',
  styleUrls: ['./cpm-table.component.scss']
})
export class CpmTableComponent implements OnInit {
  // onChange
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  activities: Activity[] = [
    // {
    //   id: 0,
    //   name: '',
    //   duration: 0,
    //   cost: 0,
    //   isSet: false
    // },
    // {
    //     id: 0,
    //     name: 'A',
    //     duration: 10,
    //     cost: 100000,
    //     isSet: true
    // },
    // {
    //     id: 1,
    //     name: 'B',
    //     duration: 5,
    //     cost: 400000,
    //     isSet: true
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
    //     cost: 150000,
    //     isSet: true
    // },
    // {
    //     id: 4,
    //     name: 'G',
    //     duration: 10,
    //     requirements: [2],
    //     cost: 200000,
    //     isSet: true
    // },
    // {
    //     id: 5,
    //     name: 'H',
    //     duration: 2,
    //     requirements: [3, 4],
    //     cost: 50000,
    //     isSet: true
    // }
];
  tempActivities: Activity[] = [];
  criticPath = [];
  totalCost = 0;
  totalDuration = 0;
  @Input() administrativeCosts;
constructor() { }

  ngOnInit() {
    this.addMissingRow();

  }

  _onRequirementsChange($event, activity: Activity) {
    this.addRequirementActivities(activity.id, $event);
  }

  getActivityById(id: number): Activity {
    return this.activities.filter(val => val.id === id)[0];
  }

  removeActivityById(id: number): void {
    this.activities = this.activities.filter(val => val.id !== id);
  }

  addRequirementActivities(id: number, activities: Activity[]) {
    this.activities[id].requirements = activities.map(val => val.id);
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

  addMissingRow(): void {
    if (!this.activities.some(val => val.isSet === false)) {
      this.activities = [...this.activities,
        {
          id: this.activities.length,
          name: '',
          isSet: false,
          duration: 0,
          cost: 0
        }];
      }
    console.log(this.activities);
  }

  // this function change the value of the object into the array
  changeValue($event, data, path): void {
    // this.activities[data][path] = parseInt($event.target.value);
    this.activities[data].isSet = true;
    this.addMissingRow();
    this.totalDuration = this.getTotalDuration() ? this.getTotalDuration() : 0;
    this.totalCost = this.getTotalCost() ? this.getTotalCost() : 0;

  }

  canRun(activity: Activity): boolean {
    if (activity.requirements) {
      for (const req of activity.requirements) {
        if (!this.tempActivities.filter(temp => temp.id === req).length) {
          return false;
        }
      }
    }
    return true;
  }

  isIncluded(activityIn: Activity) {
    // return this.tempActivities.filter(activity => activity == activityIn).length;
    return !!this.tempActivities.filter(temp => temp.id === activityIn.id).length;
  }

  getTotalDuration(): number {
  // let totalDuration = 0;
  this.criticPath = [];
  this.tempActivities = [];
  this.activities = this.activities.slice(0, this.activities.length - 1);
  while (this.tempActivities.length < this.activities.length) {
    const activity = this.activities.filter(activity => !this.isIncluded(activity))
      .filter(activity => this.canRun(activity))
      .reduce((prev, current) => (prev.duration > current.duration) ? prev : current);

    this.criticPath.push(activity);
    this.tempActivities.push(...this.activities.filter(activity => !this.isIncluded(activity)).filter(activity => this.canRun(activity)));
  }
  this.tempActivities = []
  this.totalDuration = this.criticPath.reduce((total, current) => {
    return total += parseInt(current.duration);
}, 0);
  this.addMissingRow();
  return this.totalDuration;
}

getTotalCost(): number {
    this.totalCost = this.activities.reduce((total, current) => {
      return total += current.cost * current.duration;
    }, 0) + (this.totalDuration *  this.administrativeCosts);
    return this.totalCost;
  }

}

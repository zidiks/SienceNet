import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  stagesMap = [];
  lastData;

  constructor() { }

  data: object = {
    'фармация' : {
      'спектрофотометрия' : {
        'УФ-спектрофотометрия': false
      }
    },
    'лечебное дело' : false
  }

  params = Object.keys(this.data);
  currentData = this.data;
  isLinear = false;

  next(value) {
    this.currentData = this.currentData[value];
    this.stagesMap.push(value);
    this.params = Object.keys(this.currentData);
    console.log(this.stagesMap);
  }

  back() {
    this.stagesMap.pop();
    this.currentData = this.stagesMap.reduce((obj, item) => {
      return obj[item];
    }, this.data)
    console.log(this.currentData);
    this.params = Object.keys(this.currentData);
  }

  ngOnInit(): void {
    console.log(this.params);
  }

}

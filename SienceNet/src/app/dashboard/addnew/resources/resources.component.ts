import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

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
  isLinear = true;
  stagesMap = [];

  constructor() { }

  next(value) {
    this.currentData = this.currentData[value];
    this.stagesMap.push(value);
    this.params = Object.keys(this.currentData);
    console.log(this.stagesMap);
    this.listenProp();
  }

  back() {
    this.stagesMap.pop();
    this.currentData = this.stagesMap.reduce((obj, item) => {
      return obj[item];
    }, this.data)
    console.log(this.currentData);
    this.params = Object.keys(this.currentData);
    this.listenProp();
  }

  currentClasses={ 
    'experts-wrappet-start': true,
    'experts-wrappet-all': false,
    'experts-wrappet-end': false
  }

  listenProp() {
    let mapLength = this.stagesMap.length;
    if (mapLength == 0) this.currentClasses = { 
      'experts-wrappet-start': true,
      'experts-wrappet-all': false,
      'experts-wrappet-end': false
    };
    else if (!this.currentData) this.currentClasses = { 
      'experts-wrappet-start': false,
      'experts-wrappet-all': false,
      'experts-wrappet-end': true
    }; else
     this.currentClasses = { 
      'experts-wrappet-start': false,
      'experts-wrappet-all': true,
      'experts-wrappet-end': false
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  
  data: object = {
    'фармация' : {
      'спектрофотометрия' : {
        'УФ-спектрофотометрия': false,
        'ИК-спектрофотометрия': false
      }
    },
    'лечебное дело' : false
  }

  experts: object = {
    0 : {
      name: 'Усович Александр Константинович',
      skills: ['лечебное дело']
    },
    1 : {
      name:'Шульмин Андрей Владимирович',
      skills: ['фармация', 'спектрофотометрия', 'ИК-спектрофотометрия']
    },
    2 : {
      name: 'Ржеусский Сергей Эдуардович',
      skills: ['фармация', 'спектрофотометрия', 'УФ-спектрофотометрия']
    }
  }

  params = Object.keys(this.data);
  currentData = this.data;
  isLinear = true;
  stagesMap = [];
  resultMap = [];

  constructor() { }

  next(value) {
    this.currentData = this.currentData[value];
    this.stagesMap.push(value);
    this.params = Object.keys(this.currentData);
    console.log(this.stagesMap);
    this.listenProp();
    this.expertsSelect();
  }

  back() {
    this.stagesMap.pop();
    this.currentData = this.stagesMap.reduce((obj, item) => {
      return obj[item];
    }, this.data)
    console.log(this.currentData);
    this.params = Object.keys(this.currentData);
    this.listenProp();
    this.expertsSelect();
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

  expertsSelect() {
    this.resultMap = [];
    for (var key in this.experts) {
      if (this.experts[key].skills.includes(this.stagesMap[this.stagesMap.length-1])) this.resultMap.push(this.experts[key].name);
    }
  }

  ngOnInit(): void {
  }

}

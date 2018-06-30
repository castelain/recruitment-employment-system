import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  data = [
    {
    'title': ' 2018年招生计划',
    'time': ''
    },
    {
      'title': '2017年招生计划',
      'time': ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

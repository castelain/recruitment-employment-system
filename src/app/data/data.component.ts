import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  enroll_data = [
    {
      'title': ' 2018年录取分数线统计',
      'time': ''
      },
      {
        'title': '2017年录取分数线统计',
        'time': ''
      },
  ];

  employ_data = [
    {
      'title': '2017年本科生就业情况统计表',
      'time': ''
      },
      {
        'title': '2017年研究生就业情况统计表',
        'time': ''
      },
  ];

  constructor() { }

  ngOnInit() {
  }

}

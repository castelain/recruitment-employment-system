import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  data = [
    {
    'title': '运城制版集团校园招聘简章',
    'time': '2018-04-25'
    },
    {
      'title': '太原新东方培训学校招聘简章',
      'time': '2018-04-23'
    },
    {
      'title': '2018届毕业生校园双选会第三场圆满完成',
      'time': '2018-04-13'
      },
      {
        'title': '山西大运汽车销售有限公司2018年校园招聘简章',
        'time': '2018-03-29'
      },
      {
        'title': '浙江舜宇光学科技（集团）有限公司',
        'time': '2018-03-29'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}

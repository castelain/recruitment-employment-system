import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  data = [
    {
    'title': ' 山西省2018年度选拔未就业高校毕业生到基层从事支教、支农、支医和扶贫等工作公告',
    'time': '2018-04-29'
    },
    {
      'title': '关于大学生创业基地项目退出的通知',
      'time': '2018-04-25'
    },
    {
      'title': ' 关于做好高校毕业生求职补贴发放工作的通知',
      'time': '2018-03-26'
      },
      {
        'title': '关于寒假期间办理报到证及三方协议的通知',
        'time': '2018-01-17'
      },
      {
        'title': '拟申请创业培训补贴学生花名册公示',
        'time': '2018-01-02'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}

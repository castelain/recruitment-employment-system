import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  data = [
    {
    'title': ' 云南省2018年对口升学考试获奖加分（免试职业技能）专业对照表',
    'time': '2018-04-11'
    },
    {
      'title': '高考体检须知',
      'time': '2018-03-15'
    },
    {
      'title': '我校2018年拟在浙招生普通高校专业（类）选考科目范围',
      'time': '2018-01-11'
    },
    {
      'title': '我院招生就业处全体成员赴山西大学商务学院参观交流',
      'time': '2017-12-18'
    },
    {
      'title': '关于做好2018年中等职业学校毕业生对口升学招生考试工作的通知',
      'time': '2017-12-06'
    },
    {
      'title': '关于2017级新生学杂费扣款的重要说明',
      'time': '2017-09-06'
    },
    {
      'title': '高等学校学生资助政策简介',
      'time': '2017-08-10'
    }
];

  constructor() { }

  ngOnInit() {
  }

}

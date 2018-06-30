import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-employment-info',
  templateUrl: './manage-employment-info.component.html',
  styleUrls: ['./manage-employment-info.component.css']
})
export class ManageEmploymentInfoComponent implements OnInit {

  department = ['请选择院系', '软件学院', '信息学院', '经济学院', '其他学院'];
  major = ['请选择招聘专业', '软件工程', '网络安全', '信息安全', '数字媒体技术', '其它'];
  class = ['请选择班级', '软件工程班', '数字媒体班', '国际金融班', '其他班级'];
  year = ['请选择毕业年份', '2019', '2018', '2017', '以前的年份'];
  target = ['请选择毕业去向', '就业', '考研', '出国', '考公务员', '其他'];

  constructor() { }

  ngOnInit() {
  }

}

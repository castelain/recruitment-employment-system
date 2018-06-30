import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-job-fair-info',
  templateUrl: './manage-job-fair-info.component.html',
  styleUrls: ['./manage-job-fair-info.component.css']
})
export class ManageJobFairInfoComponent implements OnInit {

  year = ['请选择招聘年份', '2019', '2018', '2017', '更早的年份'];
  order = ['请选择场次', '第一场', '第二场', '第三场', '其它场次'];
  major = ['请选择专业名称', '软件工程', '网络安全', '信息安全', '数字媒体技术', '其它'];
  target = ['请选择毕业去向', '就业', '考研', '出国', '考公务员', '其他'];

  constructor() { }

  ngOnInit() {
  }

}

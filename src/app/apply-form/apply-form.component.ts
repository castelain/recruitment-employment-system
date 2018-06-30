import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {

  major = ['请选择招聘专业', '软件工程', '网络安全', '信息安全', '数字媒体技术', '其它'];
  grade = ['请选择招聘年级', '研究生准毕业生', '大四准毕业生', '大三实习生', '其他年级'];

  constructor() { }

  ngOnInit() {
  }

}

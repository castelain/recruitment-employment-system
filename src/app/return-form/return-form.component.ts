import { Component, OnInit } from '@angular/core';
import { ReturnForm } from '../return-form';

@Component({
  selector: 'app-return-form',
  templateUrl: './return-form.component.html',
  styleUrls: ['./return-form.component.css']
})
export class ReturnFormComponent implements OnInit {

  // 页面数据
  background = ['请选择学历', '本科生', '研究生'];
  department = ['请选择院系', '软件学院', '信息学院', '生物科学学院', '经济学院'];
  major = ['请选择专业', '软件工程专业', '数字媒体专业', '网络工程专业', '信息安全专业'];
  class = ['请选择班级', '软件工程班', '数字媒体班', '网络工程班', '信息安全班'];
  target = ['请选择毕业去向', '出国深造', '就业', '创业', '继续学习（读研/读博）'];

  returnForm = new ReturnForm(this.background[0], this.department[0], this.major[0], this.class[0], '请输入学号', '请输入姓名',  this.target[0]);

  constructor() { }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}

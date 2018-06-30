import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // 首页主要数据
  homeDate = [
    {'catalog': '招生计划',
      'title': ['2018年招生计划', '2017年招生计划']
    },
    {'catalog': '考生问答',
      'title': ['2018年各省录取分数线', '历年招生录取分数线', '云南大学软件学院软件工程简介']
    },
    {'catalog': '最新职位',
      'title': ['实习分析师', 'E-Commerce Executive', 'Regulatory Affairs Institution']
    },
    {'catalog': '招聘广告',
      'title': ['上汽乘用车2018 “荣行...', '2018年"万民硕博常州..."', '重庆市璧山区2018年上...', '中国科学院电子学研究...']
    },
  ];

  //  侧边的数据
  sideData = [
    {'catalog': '招生动态',
      'content': [{
        'title': '招生宣传工作',
        'detail': '关于云南大学的招生宣传的一些准备工作为了进一步做好我院2018年招生宣传工作和学院整体形象宣传，鼓励我院学生积极创做原创作品展示信商实力'
      },
      {
        'title': '高考体检须知',
        'detail': '高考体检（一）：参考高考体检结果填报志愿 3月到4月，各省市2018年高考体检将陆续进行。高考体检结果在填报志愿时有很重要的参考意义。'
      }
    ],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

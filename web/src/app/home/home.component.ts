import { Component, OnInit, ViewChild } from '@angular/core';

import { environment } from './../../environments/environment';

import { Page } from './../paging/model/page';
import { PagedData } from './../paging/model/paged-data';

/**
 * 	首页组件
 *
 * @author 刘宏强
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // 装载指示器
  loadingIndicator: boolean = true;

  // 服务端IP地址和端口
  server: string;

  // 页面对象
  page = new Page();

  /**
   *	构造函数
   */
  @ViewChild(HomeComponent) table: HomeComponent;
  constructor() {
  	setTimeout(() => { this.loadingIndicator = false; }, 500);
  	$.getScript('./assets/js/main.js');
  }

  /**
   *	初始化方法
   */
  ngOnInit() {
	  this.setPage();
  }

  /**
   *	根据页码填充新的数据表
   *	Populate the table with new data based on the page number
   *	@param page The page to select
   */
  setPage(){}

}

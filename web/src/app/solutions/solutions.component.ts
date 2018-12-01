/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Component, OnInit } from '@angular/core';

/**
 * 	解决方案组件
 *
 * @author 刘宏强
 */
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor() {
	  $.getScript('./assets/lib/jquery/jquery.min.js');
	  $.getScript('./assets/lib/superfish/superfish.min.js');
	  $.getScript('./assets/lib/wow/wow.min.js');
	  $.getScript('./assets/js/main.js');
  }

  ngOnInit() {
  }

}

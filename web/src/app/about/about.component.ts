/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Component, OnInit } from '@angular/core';

/**
 * 	关于我们组件
 *
 * @author 刘宏强
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
	$.getScript('./assets/lib/jquery/jquery.min.js');
	$.getScript('./assets/lib/superfish/superfish.min.js');
	$.getScript('./assets/lib/wow/wow.min.js');
	$.getScript('./assets/js/main.js');
  }

  ngOnInit() {
  }

}

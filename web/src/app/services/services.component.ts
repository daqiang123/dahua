/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Component, OnInit } from '@angular/core';

/**
 * 	服务范围组件
 *
 * @author 刘宏强
 */
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() {	  
	  $.getScript('./assets/lib/jquery/jquery.min.js');
	  $.getScript('./assets/lib/superfish/superfish.min.js');
	  $.getScript('./assets/lib/wow/wow.min.js');
	  $.getScript('./assets/js/main.js');
  }

  ngOnInit() {
  }

}

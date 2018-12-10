import { Component, OnInit, ViewChild } from '@angular/core';

import { environment } from './../../environments/environment';

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
  //loadingIndicator: boolean = true;

  // 服务端IP地址和端口
  //server: string;

  /**
   *	构造函数
   */
  //@ViewChild(HomeComponent) table: HomeComponent;
  constructor() {
  	//setTimeout(() => { this.loadingIndicator = false; }, 500);

  	$.getScript('../../assets/lib/jquery/jquery.min.js');
        $.getScript('../../assets/lib/jquery/jquery-migrate.min.js');
        $.getScript('../../assets/lib/bootstrap/js/bootstrap.bundle.min.js');
        $.getScript('../../assets/lib/easing/easing.min.js');
        $.getScript('../../assets/lib/superfish/hoverIntent.js');
        $.getScript('../../assets/lib/superfish/superfish.min.js');
        $.getScript('../../assets/lib/wow/wow.min.js');
        $.getScript('../../assets/lib/waypoints/waypoints.min.js');
        $.getScript('../../assets/lib/counterup/counterup.min.js');
        $.getScript('../../assets/lib/owlcarousel/owl.carousel.min.js');
        $.getScript('../../assets/lib/isotope/isotope.pkgd.min.js');
        $.getScript('../../assets/lib/lightbox/js/lightbox.min.js');
        $.getScript('../../assets/lib/touchSwipe/jquery.touchSwipe.min.js');
        $.getScript('../../assets/js/main.js');

  }

  /**
   *	初始化方法
   */
  ngOnInit() {

  }

}

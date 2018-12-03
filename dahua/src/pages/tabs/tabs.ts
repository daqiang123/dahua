/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ServicePage } from '../service/service';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * 	标签组件
 *
 *	@author 刘宏强
 */
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ServicePage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}

/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';

/**
 * 	关于我们导航组件
 *
 * @author 刘宏强
 */
export const AboutRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: AboutComponent,
      data: {
        title: '服务范围',
        urls: [{title: '服务范围',url: '/about'},{title: '服务范围'}]
      }
    }]
  }
];

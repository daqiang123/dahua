/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Routes } from '@angular/router';

import { ServicesComponent } from './services.component';

/**
 * 	服务范围导航组件
 *
 * @author 刘宏强
 */
export const ServicesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: ServicesComponent,
      data: {
        title: '服务范围',
        urls: [{title: '服务范围',url: '/services'},{title: '服务范围'}]
      }
    }]
  }
];

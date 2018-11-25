/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

/**
 * 	联系我们导航组件
 *
 * @author 刘宏强
 */
export const ContactRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: ContactComponent,
      data: {
        title: '服务范围',
        urls: [{title: '服务范围',url: '/contact'},{title: '服务范围'}]
      }
    }]
  }
];

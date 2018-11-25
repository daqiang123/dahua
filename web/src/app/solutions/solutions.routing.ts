/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Routes } from '@angular/router';

import { SolutionsComponent } from './solutions.component';

/**
 * 	解决方案导航组件
 *
 * @author 刘宏强
 */
export const SolutionsRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: SolutionsComponent,
      data: {
        title: '服务范围',
        urls: [{title: '服务范围',url: '/solutions'},{title: '服务范围'}]
      }
    }]
  }
];

/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

/**
 * 	首页导航组件
 *
 * @author 刘宏强
 */
export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: HomeComponent,
      data: {
        title: '首页',
        urls: [{title: '首页',url: '/home'},{title: '首页'}]
      }
    }]
  }
];

/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Routes } from '@angular/router';

import { NewsComponent } from './news.component';

/**
 * 	新闻动态导航组件
 *
 * @author 刘宏强
 */
export const NewsRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: NewsComponent,
      data: {
        title: '服务范围',
        urls: [{title: '服务范围',url: '/news'},{title: '服务范围'}]
      }
    }]
  }
];

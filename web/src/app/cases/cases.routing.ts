/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { Routes } from '@angular/router';

import { CasesComponent } from './cases.component';

/**
 * 	成功案例导航组件
 *
 * @author 刘宏强
 */
export const CasesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: CasesComponent,
      data: {
        title: '服务范围',
        urls: [{title: '服务范围',url: '/cases'},{title: '服务范围'}]
      }
    }]
  }
];

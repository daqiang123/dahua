/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases.component';
import { CasesRoutes } from './cases.routing';

/**
 * 	成功案例模块
 *
 * @author 刘宏强
 */
@NgModule({
  declarations: [
    CasesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CasesRoutes)
  ]
})
export class CasesModule { }

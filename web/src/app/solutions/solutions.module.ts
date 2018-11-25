/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SolutionsComponent } from './solutions.component';
import { SolutionsRoutes } from './solutions.routing';

/**
 * 	解决方案模块
 *
 * @author 刘宏强
 */
@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SolutionsRoutes)
  ]
})
export class SolutionsModule { }

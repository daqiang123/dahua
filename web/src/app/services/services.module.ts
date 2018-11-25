/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServicesRoutes } from './services.routing';

/**
 * 	服务范围模块
 *
 * @author 刘宏强
 */
@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ServicesRoutes)
  ]
})
export class ServicesModule { }

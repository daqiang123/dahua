/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

/**
 * 	首页模块
 *
 * @author 刘宏强
 */
@NgModule({
	imports: [
    FormsModule,
    CommonModule,
    
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
      HomeComponent,
  ],
  providers: [
  ]
})
export class HomeModule { }

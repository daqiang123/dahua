/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';

/**
 * 	新闻动态模块
 *
 * @author 刘宏强
 */
@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NewsRoutes)
  ]
})
export class NewsModule { }

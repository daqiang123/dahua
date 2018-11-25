/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactRoutes } from './contact.routing';

/**
 * 	联系我们模块
 *
 * @author 刘宏强
 */
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ContactRoutes)
  ]
})
export class ContactModule { }

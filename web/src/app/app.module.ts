/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import * as $ from 'jquery';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/**
 * 	应用模块
 *
 *	@author 刘宏强
 */
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	{
		provide:LocationStrategy, 
		useClass: HashLocationStrategy
	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

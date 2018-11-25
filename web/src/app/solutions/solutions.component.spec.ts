/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsComponent } from './solutions.component';

/**
 * 	解决方案组件测试
 *
 * @author 刘宏强
 */
describe('SolutionsComponent', () => {
  let component: SolutionsComponent;
  let fixture: ComponentFixture<SolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

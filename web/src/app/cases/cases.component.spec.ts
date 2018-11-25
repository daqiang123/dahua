/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesComponent } from './cases.component';

/**
 * 	成功案例组件测试
 *
 * @author 刘宏强
 */
describe('CasesComponent', () => {
  let component: CasesComponent;
  let fixture: ComponentFixture<CasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

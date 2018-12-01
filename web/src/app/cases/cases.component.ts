import { Component, OnInit } from '@angular/core';

/**
 * 	成功案例组件
 *
 * @author 刘宏强
 */
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor() {
	$.getScript('./assets/lib/jquery/jquery.min.js');
	$.getScript('./assets/lib/superfish/superfish.min.js');
	$.getScript('./assets/lib/wow/wow.min.js');
	$.getScript('./assets/js/main.js');
  }

  ngOnInit() {
  }

}

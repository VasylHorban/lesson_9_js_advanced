import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { table } from '../shared/model/table';
import { list } from '../shared/model/list';

@Component({
  selector: 'app-create-table-list',
  templateUrl: './create-table-list.component.html',
  styleUrls: ['./create-table-list.component.css']
})
export class CreateTableListComponent implements OnInit {
  public showCode : number = 1;

  @Output() returnData = new EventEmitter();

  public table : table = {
    'border-color' : '#3b3b3b',
    'border-type' : 'solid',
    'border-width' : '1',
    'count-td' : '',
    'count-tr' : '',
    'height-td' : '',
    'width-td' : ''
  };

  public list : list = {
    'count-li' : '',
    'mark-type' : 'circle'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createTable() {
    let output : string;
    output =  `<table style = "border : ${this.table['border-width']}px ${this.table['border-type']} ${this.table['border-color']}" > `;
    for( let i = 0; i < +this.table['count-tr'] ; i++){
      output += '<tr>'
      for (let k = 0 ; k < +this.table['count-td'] ; k++ ){
        output += `<td style = "width : ${this.table['width-td']}px ; height : ${this.table['height-td']}px ;">A</td>`
      }
      output +='</tr>'

    }
    output += '</table>'
    this.returnData.emit(output)
  }


  createList() {
    let output : string;
    output = '<ul>';
    for(let i = 0; i < +this.list['count-li']; i++){
      output += `<li style = "list-style-type : ${this.list['mark-type']}"> ${i + 1}</li>`
    }
    output += '</ul>'
    this.returnData.emit(output);
  }
}


import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class OutputComponent implements OnInit {

  @Input () sketch : string;
  @Input () styles;

  constructor() { }

  ngOnInit(): void {
  }


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  public colors : string[] = [
    '#fdb3e3', '#fd9e9e', '#cba0cb', '#fff', '#c8c4ff', '#fff89a', '#4e4c4c', '#c4f8d4', '#81bf7f' 
  ]

  @Output() colorEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getColor(data : string) {
    this.colorEvent.emit(data);
  }

}

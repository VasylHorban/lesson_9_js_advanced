import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input ('sketch') sketch : string ;

  @Output () saveEvent = new EventEmitter();
  @Output () addEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  save(){
      this.saveEvent.emit(this.sketch)
  }

  add() {
    this.addEvent.emit()
  }
  
}

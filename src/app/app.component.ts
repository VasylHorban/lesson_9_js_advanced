import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SketchService } from './sketch.service';
import { styles } from './shared/model/styles'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  public openEdit : boolean = false;
  public openStyle : boolean = false;
  public openCreateTableList : boolean = false;
  public sketch : string;
  public styles : styles;
  public editSketch : string ;

  constructor(private sketchService : SketchService) {

  }

  ngOnInit() : void{
    this.get()
  }

  get() : void {
    this.sketch = this.sketchService.getText();
    this.editSketch = this.sketch;
    this.styles = this.sketchService.getStyles();
    console.log(this.sketch)
  }

  activeCreate() {
 
    this.openCreateTableList = true;
  }
  activeEdit(){
    this.openEdit = true;
    this.openStyle = false;
  } 

  activeStyle(){
    this.openStyle = true;
    this.openEdit = false;
  }

  updateSketch(updateSketch : string){
    this.sketch = updateSketch;
    this.editSketch = this.sketch;
  }

  updateStyle(data : styles) {
    this.styles = data
  }

  getTableList( data : string){
    this.editSketch += data;
    this.openCreateTableList = false;
  }

}

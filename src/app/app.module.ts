import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { BtnsComponent } from './btns/btns.component';
import { EditComponent } from './edit/edit.component';
import { StylizationComponent } from './stylization/stylization.component';
import { CreateTableListComponent } from './create-table-list/create-table-list.component';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    BtnsComponent,
    EditComponent,
    StylizationComponent,
    CreateTableListComponent,
    ColorsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

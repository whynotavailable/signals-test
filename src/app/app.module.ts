import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import axios, {Axios} from "axios";
import { CellComponent } from './cell/cell.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: Axios,
    useValue: axios
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

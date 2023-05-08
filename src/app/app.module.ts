import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import axios, {Axios} from "axios";

@NgModule({
  declarations: [
    AppComponent
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

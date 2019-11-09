import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { InputformComponent } from './inputform/inputform.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent,
    InputformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

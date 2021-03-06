import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ColorComponent]
})
export class AppModule { }

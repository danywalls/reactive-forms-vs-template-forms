import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightsReactiveComponent } from './flights-reactive/flights-reactive.component';
import { FlightsComponent } from './flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsReactiveComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

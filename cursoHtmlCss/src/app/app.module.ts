import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoceriaComponent } from './doceria/doceria.component';
import { Ccs3TopComponent } from './ccs3-top/ccs3-top.component';

@NgModule({
  declarations: [
    AppComponent,
    DoceriaComponent,
    Ccs3TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

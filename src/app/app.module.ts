import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KokaComponent } from './koka/koka.component';
import { FormsModule } from '@angular/forms';
import { ShviloComponent } from './shvilo/shvilo.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { P31Component } from './p31/p31.component';

@NgModule({
  declarations: [
    AppComponent,
    KokaComponent,
    ShviloComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P31Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

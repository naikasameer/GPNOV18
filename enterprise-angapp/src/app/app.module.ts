import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Comp61078Component } from './comp61078/comp61078.component';
import { Comp61086Component } from './comp61086/comp61086.component';
import { Comp61081Component } from './comp61081/comp61081.component';
import { Comp61084Component } from './comp61084/comp61084.component';
import { Comp61073Component } from './comp61073/comp61073.component';
import { Comp61089Component } from './comp61089/comp61089.component';
@NgModule({
  declarations: [
    AppComponent,
    Comp61086Component,
    Comp61078Component,
    Comp61081Component,
    Comp61084Component,
    Comp61089Component,
    Comp61073Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

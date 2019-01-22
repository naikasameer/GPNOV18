import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

import { Comp61072Component } from './comp61072/comp61072.component';
import { Comp61081Component } from './comp61081/comp61081.component';
import { Comp61084Component } from './comp61084/comp61084.component';
import { Comp61073Component } from './comp61073/comp61073.component';
import { Comp61086Component } from './comp61086/comp61086.component';
import { Comp61078Component } from './comp61078/comp61078.component';



=======
import { Comp61086Component } from './comp61086/comp61086.component';

import { Comp61078Component } from './comp61078/comp61078.component';


import { Comp61081Component } from './comp61081/comp61081.component';

import { Comp61084Component } from './comp61084/comp61084.component';
import { Comp61073Component } from './comp61073/comp61073.component';
>>>>>>> 626dd84f1d3bee02b76f7f3c6849049ecfd60ab4





@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Comp61072Component,
    Comp61081Component,
    Comp61084Component,
    Comp61086Component,
    Comp61078Component,
    Comp61073Component,
 
  

=======

    Comp61086Component,

    Comp61078Component,

    Comp61081Component,
    Comp61084Component,
    Comp61073Component,
    Comp61084Component,
    Comp61073Component,
>>>>>>> 626dd84f1d3bee02b76f7f3c6849049ecfd60ab4

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

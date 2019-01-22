import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { Comp61079Component } from './comp61079/comp61079.component';
=======
import { Comp61073Component } from './comp61073/comp61073.component';
>>>>>>> b937608f1d0ccd34b272654f35a8d32b1c0e64a3

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Comp61079Component
=======
    Comp61073Component
>>>>>>> b937608f1d0ccd34b272654f35a8d32b1c0e64a3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './containers/home/home.module';
import { ListModule } from './containers/list/list.module';
import { InputComponent } from './modules/form/input/input.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ListModule
  ],
  providers: [InputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

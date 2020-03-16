import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { InputStarsComponent } from './input-stars.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, InputStarsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}

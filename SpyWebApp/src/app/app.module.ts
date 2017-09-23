import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { SpytoolbarComponent } from './spytoolbar/spytoolbar.component';
import { SpyContentComponent } from './spycontent/spy-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SpytoolbarComponent,
    SpyContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

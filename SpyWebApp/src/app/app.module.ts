import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { SpytoolbarComponent } from './spytoolbar/spytoolbar.component';
import { SpyContentComponent } from './spycontent/spy-content.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from "./_services/security/auth.guard";
import {AuthService} from "./_services/security/auth.service";
import {AlertService} from "./_services/alert/alert.service";
import {PagerService} from "./_services/pagination/pager.service";
import {HttpSerService} from "./_services/http/http-ser.service";
import {BrandComponent} from './brand/brand.component';
import {UserComponent} from './users/users.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {DevicesComponent} from './devices/devices.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {path: 'brands', component: SpyContentComponent},
  {path: 'brands/:brand', component: BrandComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'users/:slug', component: UserComponent},
  {path: 'devices/:slug', component: DevicesComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpytoolbarComponent,
    SpyContentComponent,
    HomeComponent,
    PageNotFoundComponent,
    BrandComponent,
    UserComponent,
    AllUsersComponent,
    DevicesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
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
  providers: [
    HttpSerService,
    PagerService,
    AlertService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

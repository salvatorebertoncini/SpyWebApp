import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from "@angular/http";
import 'hammerjs';
import {ChartsModule} from 'ng2-charts';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdStepperModule,
} from '@angular/material';


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
import {AllDevicesComponent} from './all-devices/all-devices.component';
import {StatsComponent} from './stats/stats.component';
import {GoogleChartResolver} from "./_services/google-chart/google-chart.resolver";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'brands', component: SpyContentComponent},
  {path: 'brands/:brand', component: BrandComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'users/:slug', component: UserComponent},
  {path: 'devices', component: AllDevicesComponent},
  {path: 'devices/:slug', component: DevicesComponent},
  {path: 'stats', component: StatsComponent},
  {path: '**', component: PageNotFoundComponent}
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
    DevicesComponent,
    AllDevicesComponent,
    StatsComponent
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
    MdIconModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    HttpSerService,
    PagerService,
    AlertService,
    AuthService,
    AuthGuard
  ],
  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdStepperModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

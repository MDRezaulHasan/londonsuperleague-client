import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TournamentsFormComponent } from './components/tournaments-form/tournaments-form.component';
import { TeamDashboardComponent } from './components/team-dashboard/team-dashboard.component';
import { HomeSlderComponent } from './components/home-slder/home-slder.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TournamentsFormComponent,
    TeamDashboardComponent,
    HomeSlderComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

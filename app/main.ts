import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, RacesComponent, NavComponent ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
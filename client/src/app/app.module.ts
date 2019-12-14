import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//imports templates
import { NavbarComponent } from '../app/templates/navbar/navbar.component';
import { FooterComponent } from '../app/templates/footer/footer.component';
import { HeroComponent } from '../app/templates/hero/hero.component';
import { HomeComponent } from '../app/templates/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

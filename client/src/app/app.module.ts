import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; 
//imports templates
import { NavbarComponent } from '../app/templates/navbar/navbar.component';
import { FooterComponent } from '../app/templates/footer/footer.component';
import { HeroComponent } from '../app/templates/hero/hero.component';
import { UsersModule } from './modulos/users/users.module';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { ConfirmaComponent } from './templates/confirma/confirma.component';
import { CorreoConfirmaComponent } from "./templates/correo-confirma/correo-confirma.component";

//imports users


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    PageNotFoundComponent,
    ConfirmaComponent,
    CorreoConfirmaComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

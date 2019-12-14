import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, HeroComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule { }

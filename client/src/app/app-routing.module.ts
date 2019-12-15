import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './modulos/users/users.module';
import { HomeComponent } from './modulos/home/home/home.component';
import { HomeModule } from './modulos/home/home.module';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersModule,
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

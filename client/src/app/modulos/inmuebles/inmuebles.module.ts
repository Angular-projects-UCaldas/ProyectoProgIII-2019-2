import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { HomeInmueblesComponent } from './home-inmueble/home-inmueble.component';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { SolicitarInmuebleComponent } from './solicitar-inmuebles/solicitar-inmuebles.component';
import { DeleteInmuebleComponent } from './delete-inmueble/delete-inmueble.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';


@NgModule({
  declarations: [HomeInmueblesComponent, CrearInmuebleComponent, DetalleProductosComponent, SolicitarInmuebleComponent, DeleteInmuebleComponent, ListaSolicitudesComponent],
  imports: [
    CommonModule,
    InmueblesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
  
})
export class InmueblesModule { }

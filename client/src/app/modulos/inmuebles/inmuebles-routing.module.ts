import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeInmueblesComponent } from './home-inmueble/home-inmueble.component';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { DeleteInmuebleComponent } from './delete-inmueble/delete-inmueble.component';
import { SolicitarInmuebleComponent } from './solicitar-inmuebles/solicitar-inmuebles.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';


const routes: Routes = [
  {
    path:'home-i',
    component: HomeInmueblesComponent
  },
  {
    path:'create-inmueble',
    component:CrearInmuebleComponent
  },
  {
    path:'details/:id',
    component:DetalleProductosComponent
  },
  {
  path:'delete/:id',
  component:DeleteInmuebleComponent
  },
  {
    path:'asesor/solicitudes/nueva/:id',
    component:SolicitarInmuebleComponent
  },
  {
    path:'asesor/lista-solicitudes',
    component:ListaSolicitudesComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmueblesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { EditarComponent } from './editar/editar.component';
import { ProductsComponent } from './products/products.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '', component: UsuarioComponent},
  { path : 'bienvenido', component: BienvenidoComponent },
  { path : 'products', component: ProductsComponent },
  { path : 'products/:id', component: ProductsComponent },
  { path : 'agregar', component: AgregarComponent },
  { path : 'editar/:id', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '', component: UsuarioComponent},
  { path : 'bienvenido', component: BienvenidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

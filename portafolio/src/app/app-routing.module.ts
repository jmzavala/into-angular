import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProyectoComponent} from "./pages/proyecto/proyecto.component";
import {PerfilComponent} from "./pages/perfil/perfil.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'proyecto',
  component: ProyectoComponent
},{
  path:'perfil',
  component: PerfilComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

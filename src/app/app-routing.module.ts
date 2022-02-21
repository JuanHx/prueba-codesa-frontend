import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRegistrosComponent } from './agregar-registros/agregar-registros.component';
import { EditarRegistrosComponent } from './editar-registros/editar-registros.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'agregarRegistro', component: AgregarRegistrosComponent},
  {path: 'editarRegristro/:id', component: EditarRegistrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

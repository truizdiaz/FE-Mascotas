import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  { path: '', redirectTo: 'listMascotas', pathMatch: 'full' },
  { path:'listMascotas', component: ListadoMascotaComponent },
  { path:'agregarMascota', component: AgregarEditarMascotaComponent },
  { path:'verMascota/:id', component: VerMascotaComponent },
  { path:'editarMascota/:id', component: AgregarEditarMascotaComponent },
  { path: '**',  redirectTo: 'listMascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

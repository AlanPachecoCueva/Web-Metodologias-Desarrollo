import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditarCentroCostoComponent } from './editar-centro-costo/editar-centro-costo.component';
import { NuevoCentroCostoComponent } from './nuevo-centro-costo/nuevo-centro-costo.component';


const routes: Routes = [
  // Otras rutas de tu aplicación
  { path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent }, // Agrega esta línea para la ruta del LoginComponent
  { path: 'home', component: HomeComponent },
  { path: 'editarCC/:codigo/:nombreCC', component: EditarCentroCostoComponent},
  { path: 'nuevoCC', component: NuevoCentroCostoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

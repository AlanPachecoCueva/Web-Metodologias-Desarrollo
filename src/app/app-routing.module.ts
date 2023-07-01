import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './login/login.component';
import { ListarCComponent } from './listarcc/listarcc.component';
import { EditarCentroCostoComponent } from './editar-centro-costo/editar-centro-costo.component';
import { NuevoCentroCostoComponent } from './nuevo-centro-costo/nuevo-centro-costo.component';
import { HomeComponent } from './home/home.component';
import { ListarPlanillasComponent } from './listar-planillas/listar-planillas.component';
import { AgregarPlanillaComponent } from './agregar-planilla/agregar-planilla.component';
import { EditarPlanillaComponent } from './editar-planilla/editar-planilla.component';
import { ListarTrabajadoresComponent } from './listar-trabajadores/listar-trabajadores.component';



const routes: Routes = [
  // Otras rutas de tu aplicación
  { path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent }, // Agrega esta línea para la ruta del LoginComponent
  { path: 'home/:codigo', component: HomeComponent },
  { path: 'editarCC/:codigo/:nombreCC', component: EditarCentroCostoComponent},
  { path: 'nuevoCC', component: NuevoCentroCostoComponent },
  { path: 'listarcc', component : ListarCComponent},
  { path: 'listarPlanillas', component: ListarPlanillasComponent },
  { path: 'agregarPlanilla', component: AgregarPlanillaComponent },
  { path: 'editarPlanilla/:concepto', component: EditarPlanillaComponent },
  { path: 'listar-trabajadores/:codigo', component: ListarTrabajadoresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

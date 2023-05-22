import { Component } from '@angular/core';


import { Router } from '@angular/router';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
//Para variables de entorno
import { environment } from '../../../environments/environments';
//Alertas
import Swal from 'sweetalert2'

//URL DE LA API
const apiUrl = environment.API_URL;

//CLASE para parsear el resultado de la api
interface Trabajador {
  COMP_Codigo: string,
  Id_Trabajador: string,
  Tipo_trabajador: string,
  Apellido_Paterno: string,
  Apellido_Materno: string,
  Nombres: string,
  Identificacion: string,
  Entidad_Bancaria: string,
  CarnetIESS: string,
  Direccion: string,
  Telefono_Fijo: string,
  Telefono_Movil: string,
  Genero: string,
  Nro_Cuenta_Bancaria: string,
  Codigo_Categoria_Ocupacion: string,
  Ocupacion: string,
  Centro_Costos: string,
  Nivel_Salarial: string,
  EstadoTrabajador: string,
  Tipo_Contrato: string,
  Tipo_Cese: string,
  EstadoCivil: string,
  TipodeComision: string,
  FechaNacimiento: string,
  FechaIngreso: string,
  FechaCese: string,
  PeriododeVacaciones: string,
  FechaReingreso: string,
  Fecha_Ult_Actualizacion: string,
  EsReingreso: string,
  BancoCTA_CTE: string,
  Tipo_Cuenta: string,
  RSV_Indem_Acumul: string,
  Año_Ult_Rsva_Indemni: string,
  Mes_Ult_Rsva_Indemni: string,
}


@Component({
  selector: 'app-listar-trabajadores',
  templateUrl: './listar-trabajadores.component.html',
  styleUrls: ['./listar-trabajadores.component.css']
})

export class ListarTrabajadoresComponent {


  title = 'Interfaz-Login';

  //Para las columnas de la tabla
  displayedColumns: string[] = ['COMP_Codigo', 'Id_Trabajador', 'Tipo_trabajador', 'Apellido_Paterno', 'Apellido_Materno',
    'Nombres', 'Identificacion', 'Entidad_Bancaria', 'Direccion'];
  trabajadores: Trabajador[] = [];

  mostrarAgregar: boolean = false;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { };

  //Cuando se inicia la página, lo primero que se hace es cargar los costos
  ngOnInit(): void {
    const url = `${apiUrl}/ListarTrabajadores?sucursal=` + this.route.snapshot.paramMap.get('codigo');
    this.http.get<Trabajador[]>(`${url}`).subscribe(response => {
      this.trabajadores = response;
    });

  }


  //Para mostrar el agregar o no
  showAdd() {
    this.mostrarAgregar = !this.mostrarAgregar;
  }

}

import { Component } from '@angular/core';

import { Router } from '@angular/router';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';

//Para variables de entorno
import { environment } from '../../../environments/environments';
//Alertas
import Swal from 'sweetalert2'

//URL DE LA API
const apiUrl = environment.API_URL;

//CLASE para parsear el resultado de la api
interface MovimientoPlanilla {
  CodigoConcepto: number,
  Concepto: string,
  Prioridad: number,
  TipoOperacion: string,
  Cuenta1: string,
  Cuenta2: string,
  Cuenta3: string,
  Cuenta4: string,
  MovimientoExcepcion1: string,
  MovimientoExcepcion2: string,
  MovimientoExcepcion3: string,
  Aplica_iess: string,
  Aplica_imp_renta: string,
  Empresa_Afecta_Iess: string,
  Mensaje: null
}

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
  selector: 'app-listar-planillas',
  templateUrl: './listar-planillas.component.html',
  styleUrls: ['./listar-planillas.component.css']
})


export class ListarPlanillasComponent {


  title = 'Interfaz-Login';

  //Para las columnas de la tabla
  displayedColumns: string[] = ['Codigo', 'Concepto', 'Prioridad', 'TipoOperacion', 'Cuenta1', 'Aplica_iess', 'Aplica_imp_renta', 'Empresa_Afecta_Iess', 'Borrar', 'Editar'];
  planillas: MovimientoPlanilla[] = [];
trabajadores: Trabajador[] = [];
  busquedaConcepto: String = "";

  mostrarAgregar: boolean = false;

  constructor(private http: HttpClient, private router: Router) { };

  //Cuando se inicia la página, lo primero que se hace es cargar los costos
  ngOnInit(): void {
    const url = `${apiUrl}/GetTrabajadorPorEmisor?codigo=` + this.router.snapshot.paramMap.get('codigo');
    this.http.get<Trabajador[]>(`${url}`).subscribe(response => {
      this.trabajadores = response;
    });
  }


  //Para mostrar el agregar o no
  showAdd() {
    this.mostrarAgregar = !this.mostrarAgregar;
  }

  //Borrar un centro de costos
  async btnBorrar(element: any) {

    //Validación de seguridad
    await Swal.fire({
      title: '¡Acción crítica!',
      text: '¿Desea eliminar el movimiento de planilla?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {
        try {

          //Si el usuario confirmó que quiere borrar el centro de costos

          //Url que lleva el código y el nombre del centro de costos como parámetros
          const url = `${apiUrl}/DeleteCentroDeCosto?codigoCentroCostos=${element.Codigo}&descripcioncentrocostos=${element.NombreCentroCostos}`;

          //Se hace la eliminación en la api
          this.http.get<MovimientoPlanilla[]>(url).subscribe(async (response) => {

            //Si la eliminación fue exitosa
            // if (response[0].NombreCentroCostos.localeCompare("Eliminación Exitosa") === 0) {

            //   await Swal.fire({
            //     title: 'Eliminación correcta',
            //     text: 'El centro de costos se eliminó correctamente',
            //     icon: 'success',
            //     confirmButtonText: 'Aceptar',
            //   })
            //   //Se recarga la página
            //   location.reload();
            // } else {
            //   //Si la eliminación falló
            //   Swal.fire({
            //     title: 'Eliminación fallida',
            //     text: 'El centro de costos NO se eliminó correctamente',
            //     icon: 'error',
            //     confirmButtonText: 'Aceptar',
            //   })
            // }

          })
        }
        catch (error) {
          console.error("error en home component:", error);
        }
      } else {
        //Si el usuario canceló la eliminación
        Swal.fire({
          title: 'Acción cancelada',
          text: 'No se eliminó el centro de costos',
          icon: 'warning',
          confirmButtonText: 'Aceptar',
        })
        return;
      }
    })


  }

  btnEditar(element: any) {
    this.router.navigate(['/editarPlanilla', element.CodigoConcepto]);
  }


  buscar() {
    //Si el nombre está vacío no busca
    if (this.busquedaConcepto.length < 1) {
      return;
    }

    try {

      //Si hay datos válidos busca en la api
      const url = `${apiUrl}/SearchMovimientoPlanilla?concepto=${this.busquedaConcepto}`;

      this.http.get<MovimientoPlanilla[]>(url).subscribe(async (response) => {

        if (!response || response == null) {

          await Swal.fire({
            title: 'Búsqueda incorrecta',
            text: 'No se encontró un centro de costos con la descripción proporcionada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          })

          return;
        }
        if (response.length > 0) {

          this.planillas = response;
        }


      })
    }
    catch (error) {

      console.error("Error en búsqueda en home component:", error);

    }
  }
}

import { Component } from '@angular/core';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;
interface MovimientoPlanilla {
  CodigoConcepto: number;
  Concepto: string;
  Prioridad: number;
  TipoOperacion: string;
  Cuenta1: string;
  Cuenta2: string;
  Cuenta3: string;
  Cuenta4: string;
  MovimientoExcepcion1: string;
  MovimientoExcepcion2: string;
  MovimientoExcepcion3: string;
  Aplica_iess: string;
  Aplica_imp_renta: string;
  Empresa_Afecta_Iess: string;
  Mensaje: null;
}

//CLASE para parsear el resultado de la api
interface Trabajador {
  COMP_Codigo: string;
  Id_Trabajador: string;
  Tipo_trabajador: string;
  Apellido_Paterno: string;
  Apellido_Materno: string;
  Nombres: string;
  Identificacion: string;
  Entidad_Bancaria: string;
  CarnetIESS: string;
  Direccion: string;
  Telefono_Fijo: string;
  Telefono_Movil: string;
  Genero: string;
  Nro_Cuenta_Bancaria: string;
  Codigo_Categoria_Ocupacion: string;
  Ocupacion: string;
  Centro_Costos: string;
  Nivel_Salarial: string;
  EstadoTrabajador: string;
  Tipo_Contrato: string;
  Tipo_Cese: string;
  EstadoCivil: string;
  TipodeComision: string;
  FechaNacimiento: string;
  FechaIngreso: string;
  FechaCese: string;
  PeriododeVacaciones: string;
  FechaReingreso: string;
  Fecha_Ult_Actualizacion: string;
  EsReingreso: string;
  BancoCTA_CTE: string;
  Tipo_Cuenta: string;
  RSV_Indem_Acumul: string;
  Año_Ult_Rsva_Indemni: string;
  Mes_Ult_Rsva_Indemni: string;
}

@Component({
  selector: 'app-agregar-trabajador',
  templateUrl: './agregar-trabajador.component.html',
  styleUrls: ['./agregar-trabajador.component.css'],
})
export class AgregarTrabajadorComponent {
  element = {
    Concepto: '',
    Prioridad: '',
    TipoOperacion: '',
    Cuenta1: '',
    Cuenta2: '',
    Cuenta3: '',
    Cuenta4: '',
    MovimientoExcepcion1: '',
    MovimientoExcepcion2: '',
    MovimientoExcepcion3: '',
    Traba_Aplica_iess: '',
    Traba_Proyecto_imp_renta: '',
    Aplica_Proy_Renta: '',
    Empresa_Afecta_Iess: '',
  //TRABAJADOR
    COMP_Cod: '',
    Id_Trabajador: '',
    Tipo_trabajador: '',
    Apellido_Paterno: '',
    Apellido_Materno: '',
    Nombres: '',
    Identificacion: '',
    Entidad_Bancaria: '',
    CarnetIESS: '',
    Direccion: '',
    Telefono_Fijo: '',
    Telefono_Movil: '',
    Genero: '',
    Nro_Cuenta_Bancaria: '',
    Codigo_Categoria_Ocupacion: '',
    Ocupacion: '',
    Centro_Costos: '',
    Nivel_Salarial: '',
    EstadoTrabajador: '',
    Tipo_Contrato: '',
    Tipo_Cese: '',
    EstadoCivil: '',
    TipodeComision: '',
    FechaNacimiento: '',
    FechaIngreso: '',
    FechaCese: '',
    PeriododeVacaciones: '',
    FechaReingreso: '',
    Fecha_Ult_Actualizacion: '',
    EsReingreso: '',
    BancoCTA_CTE: '',
    Tipo_Cuenta: '',
    RSV_Indem_Acumul: '',
    Año_Ult_Rsva_Indemni: '',
    Mes_Ult_Rsva_Indemni: '',
  };

  tiposOperaciones: any;

  movimientosExcepcion12: any;
  movimientosExcepcion3: any;
  opcionesTraba_Aplica_iess: any;
  opcionesTrabAfecImpuestoRenta: any;
  
  constructor(private http: HttpClient, private router: Router) {}

  //Trabajadores
  emisores: any;
  tipoTrabajador: any;
  generos: any;
  centroCostos: any;
  estadosTrabajador: any;
  
  ngOnInit(): void {
    //Trabajador

    console.log('apiUrl: ', apiUrl);
    this.http.get(`${apiUrl}/Emisores`).subscribe((response) => {
      this.emisores = response;

      console.log('Emisores: ', this.emisores);
    });

    this.http.get(`${apiUrl}/TipoTrabajador`).subscribe((response) => {
      this.tipoTrabajador = response;

      console.log('tipoTrabajador: ', this.tipoTrabajador);
    });

    this.http.get(`${apiUrl}/Generos`).subscribe((response) => {
      this.generos = response;

      console.log('generos: ', this.generos);
    });

    this.http.get(`${apiUrl}/Costos`).subscribe(response => {
      this.centroCostos = response;

      console.log('centroCostos: ', this.centroCostos);
    });
    

    this.http.get(`${apiUrl}/EstadoTrabajador`).subscribe((response) => {
      this.estadosTrabajador = response;

      console.log('estadosTrabajador: ', this.estadosTrabajador);
    });
    //---------------------
    

    this.http.get(`${apiUrl}/MovimientosExcepcion12`).subscribe((response) => {
      this.movimientosExcepcion12 = response;

      console.log('movimientosExcepcion12: ', this.movimientosExcepcion12);
    });

    this.http.get(`${apiUrl}/MovimientosExcepcion3`).subscribe((response) => {
      this.movimientosExcepcion3 = response;

      console.log('movimientosExcepcion3: ', this.movimientosExcepcion3);
    });

    this.http.get(`${apiUrl}/TrabaAfectaIESS`).subscribe((response) => {
      this.opcionesTraba_Aplica_iess = response;

      console.log('TrabaAfectaIESS: ', this.opcionesTraba_Aplica_iess);
    });

    this.http.get(`${apiUrl}/TrabAfecImpuestoRenta`).subscribe((response) => {
      this.opcionesTrabAfecImpuestoRenta = response;

      console.log(
        'opcionesTrabAfecImpuestoRenta: ',
        this.opcionesTrabAfecImpuestoRenta
      );
    });
  }

  actualizarValor(type: string, content: string) {
    console.log('Actualiza: ', type, content);
    if (type.localeCompare('TipoOperacion') === 0) {
      this.element.TipoOperacion = content;
    }
    if (type.localeCompare('MovimientoExcepcion1') === 0) {
      this.element.MovimientoExcepcion1 = content;
    }
    if (type.localeCompare('MovimientoExcepcion2') === 0) {
      this.element.MovimientoExcepcion2 = content;
    }
    if (type.localeCompare('MovimientoExcepcion3') === 0) {
      this.element.MovimientoExcepcion3 = content;
    }
    if (type.localeCompare('Traba_Aplica_iess') === 0) {
      this.element.Traba_Aplica_iess = content;
    }
    if (type.localeCompare('Traba_Proyecto_imp_renta') === 0) {
      this.element.Traba_Proyecto_imp_renta = content;
    }
    if (type.localeCompare('Aplica_Proy_Renta') === 0) {
      this.element.Aplica_Proy_Renta = content;
    }
    if (type.localeCompare('Empresa_Afecta_Iess') === 0) {
      this.element.Empresa_Afecta_Iess = content;
    }
  }

  crearNuevoCC() {
    console.log('element a crear: ', this.element);

    try {
      //Configura los valores
      if (this.element.TipoOperacion.localeCompare('Ingresos') === 0) {
        this.element.TipoOperacion = 'I';
      } else {
        this.element.TipoOperacion = 'E';
      }

      if (
        this.element.MovimientoExcepcion1.localeCompare(
          'Horas Movimiento Planilla'
        ) === 0
      ) {
        this.element.MovimientoExcepcion1 = 'H';
      } else if (
        this.element.MovimientoExcepcion1.localeCompare(
          'Movimiento Planilla'
        ) === 0
      ) {
        this.element.MovimientoExcepcion1 = 'M';
      } else {
        this.element.MovimientoExcepcion1 = 'C';
      }

      if (
        this.element.MovimientoExcepcion2.localeCompare(
          'Horas Movimiento Planilla'
        ) === 0
      ) {
        this.element.MovimientoExcepcion2 = 'H';
      } else if (
        this.element.MovimientoExcepcion2.localeCompare(
          'Movimiento Planilla'
        ) === 0
      ) {
        this.element.MovimientoExcepcion2 = 'M';
      } else {
        this.element.MovimientoExcepcion2 = 'C';
      }

      if (this.element.MovimientoExcepcion3.localeCompare('Sierra') === 0) {
        this.element.MovimientoExcepcion3 = 'S';
      } else if (
        this.element.MovimientoExcepcion3.localeCompare('Costa') === 0
      ) {
        this.element.MovimientoExcepcion3 = 'C';
      } else if (
        this.element.MovimientoExcepcion3.localeCompare('No Aplica') === 0
      ) {
        this.element.MovimientoExcepcion3 = 'N';
      } else {
        this.element.MovimientoExcepcion3 = 'X';
      }

      if (this.element.Traba_Aplica_iess.localeCompare('Si') === 0) {
        this.element.Traba_Aplica_iess = '1';
      } else {
        this.element.Traba_Aplica_iess = '0';
      }
      if (this.element.Traba_Proyecto_imp_renta.localeCompare('Aplica') === 0) {
        this.element.Traba_Proyecto_imp_renta = '1';
      } else {
        this.element.Traba_Proyecto_imp_renta = '0';
      }

      if (this.element.Aplica_Proy_Renta.localeCompare('Si') === 0) {
        this.element.Aplica_Proy_Renta = '1';
      } else {
        this.element.Aplica_Proy_Renta = '0';
      }

      if (this.element.Empresa_Afecta_Iess.localeCompare('Si') === 0) {
        this.element.Empresa_Afecta_Iess = '1';
      } else {
        this.element.Empresa_Afecta_Iess = '0';
      }
      console.log('element a crear: ', this.element);
      const url = `${apiUrl}/CreateMovimientoPlanilla?concepto=${this.element.Concepto}&prioridad=${this.element.Prioridad}&tipoOperacion=${this.element.TipoOperacion}&c1=${this.element.Cuenta1}&c2=${this.element.Cuenta2}&c3=${this.element.Cuenta3}&c4=${this.element.Cuenta4}&me1=${this.element.MovimientoExcepcion1}`;
      const url2 = `&me2=${this.element.MovimientoExcepcion2}&me3=${this.element.MovimientoExcepcion3}&Traba_Aplica_iess=${this.element.Traba_Aplica_iess}&Traba_Proyecto_imp_renta=${this.element.Traba_Proyecto_imp_renta}&Aplica_Proy_Renta=${this.element.Aplica_Proy_Renta}&Empresa_Afecta_Iess=${this.element.Empresa_Afecta_Iess}`;

      this.http
        .get<MovimientoPlanilla[]>(url + url2)
        .subscribe(async (response) => {
          console.log('Create planilla response: ', response);
          if (response == null || response == undefined) {
            alert('El movimiento de plantilla no se actualizó correctamente');
            return;
          }

          console.log('response: ', response[0]);

          if (response[0].Concepto == this.element.Concepto) {
            alert('El centro de costos se creó correctamente');
            //Redirecciona a home
            this.router.navigate(['/home']);
          } else {
            alert('El centro de costos no se actualizó correctamente');
          }
        });
    } catch (error) {
      console.log('error:', error);
    }
  }
}

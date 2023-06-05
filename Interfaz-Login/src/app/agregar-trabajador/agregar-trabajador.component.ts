import { Component } from '@angular/core';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;

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
  FormaCalculo13ro: string;
  FormaCalculo14ro: string;
  BoniComplementaria: string;
  BoniEspecial: string;
  Remuneracion_Minima: string;
  Fondo_Reserva: string;
  Mensaje: string;
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
    FormaCalculo13ro: '',
    FormaCalculo14ro: '',
    BoniComplementaria: '',
    BoniEspecial: '',
    Remuneracion_Minima: '',
    Fondo_Reserva: '',
    Mensaje: '',
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
  estadosCiviles: any;
  tiposCese: any;
  tiposContrato: any;
  tiposComision: any;
  tipoVacaciones: any;
  esReingreso: any;
  tiposCuenta: any;
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

    this.http.get(`${apiUrl}/Costos`).subscribe((response) => {
      this.centroCostos = response;

      console.log('centroCostos: ', this.centroCostos);
    });

    this.http.get(`${apiUrl}/EstadoTrabajador`).subscribe((response) => {
      this.estadosTrabajador = response;

      console.log('estadosTrabajador: ', this.estadosTrabajador);
    });

    this.http.get(`${apiUrl}/EstadoCivil`).subscribe((response) => {
      this.estadosCiviles = response;

      console.log('EstadoCivil: ', this.estadosCiviles);
    });

    this.http.get(`${apiUrl}/TipoCese`).subscribe((response) => {
      this.tiposCese = response;

      console.log('tiposCese: ', this.tiposCese);
    });

    this.http.get(`${apiUrl}/TipoContrato`).subscribe((response) => {
      this.tiposContrato = response;

      console.log('tiposContrato: ', this.tiposContrato);
    });

    this.http.get(`${apiUrl}/TipoComision`).subscribe((response) => {
      this.tiposComision = response;

      console.log('TipoComision: ', this.tiposComision);
    });

    this.http.get(`${apiUrl}/TipoVacacion`).subscribe((response) => {
      this.tipoVacaciones = response;

      console.log('tipoVacaciones: ', this.tipoVacaciones);
    });

    this.http.get(`${apiUrl}/EsReingreso`).subscribe((response) => {
      this.esReingreso = response;

      console.log('esReingreso: ', this.esReingreso);
    });

    this.http.get(`${apiUrl}/TipoCuenta`).subscribe((response) => {
      this.tiposCuenta = response;

      console.log('tiposCuenta: ', this.tiposCuenta);
    });

    //---------------------
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
      
      console.log('element a crear: ', this.element);
      const url = `${apiUrl}/CreateMovimientoPlanilla?concepto=${this.element.Concepto}&prioridad=${this.element.Prioridad}&tipoOperacion=${this.element.TipoOperacion}&c1=${this.element.Cuenta1}&c2=${this.element.Cuenta2}&c3=${this.element.Cuenta3}&c4=${this.element.Cuenta4}&me1=${this.element.MovimientoExcepcion1}`;
      const url2 = `&me2=${this.element.MovimientoExcepcion2}&me3=${this.element.MovimientoExcepcion3}&Traba_Aplica_iess=${this.element.Traba_Aplica_iess}&Traba_Proyecto_imp_renta=${this.element.Traba_Proyecto_imp_renta}&Aplica_Proy_Renta=${this.element.Aplica_Proy_Renta}&Empresa_Afecta_Iess=${this.element.Empresa_Afecta_Iess}`;

      this.http
        .get<Trabajador[]>(url + url2)
        .subscribe(async (response) => {
          console.log('Create planilla response: ', response);
          if (response == null || response == undefined) {
            alert('El movimiento de plantilla no se actualizó correctamente');
            return;
          }

          console.log('response: ', response[0]);

          // if (response[0].Concepto == this.element.Concepto) {
          //   alert('El centro de costos se creó correctamente');
          //   //Redirecciona a home
          //   this.router.navigate(['/home']);
          // } else {
          //   alert('El centro de costos no se actualizó correctamente');
          // }
        });
    } catch (error) {
      console.log('error:', error);
    }
  }
}

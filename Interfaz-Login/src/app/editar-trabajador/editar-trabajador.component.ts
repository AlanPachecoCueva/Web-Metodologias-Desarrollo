import { Component, Input  } from '@angular/core';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;
@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent {
  @Input() element: any;
  //element = this.trabajador;
  // element = {
  //   //TRABAJADOR
  //   COMP_Codigo: 1,
  //   Id_Trabajador: '',
  //   Tipo_trabajador: '',
  //   Apellido_Paterno: '',
  //   Apellido_Materno: '',
  //   Nombres: '',
  //   Identificacion: '',
  //   Entidad_Bancaria: '',
  //   CarnetIESS: 'NA',
  //   Direccion: '',
  //   Telefono_Fijo: '',
  //   Telefono_Movil: '',
  //   Genero: '',
  //   Nro_Cuenta_Bancaria: '',
  //   Codigo_Categoria_Ocupacion: '',
  //   Ocupacion: '2',
  //   Centro_Costos: 1,
  //   Nivel_Salarial: '',
  //   EstadoTrabajador: '',
  //   Tipo_Contrato: '',
  //   Tipo_Cese: '',
  //   EstadoCivil: '',
  //   TipodeComision: '',
  //   FechaNacimiento: '',
  //   FechaIngreso: '',
  //   FechaCese: '',
  //   PeriododeVacaciones: '',
  //   FechaReingreso: '',
  //   Fecha_Ult_Actualizacion: '',
  //   EsReingreso: '',
  //   BancoCTA_CTE: '',
  //   Tipo_Cuenta: null,
  //   FormaCalculo13ro: 1,
  //   FormaCalculo14ro: 0,
  //   BoniComplementaria: 0,
  //   BoniEspecial: 0,
  //   Remuneracion_Minima: 480,
  //   Fondo_Reserva: '',
  //   Mensaje: '',
  // };

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
  }

  async crearNuevoCC() {

    try {
      const url = `${apiUrl}/CreateTrabajador`;

      // Crear un objeto con los datos del trabajador
      
      const data = {
        COMP_Codigo: this.element.COMP_Codigo,
        Tipo_trabajador: this.element.Tipo_trabajador,
        Apellido_Paterno: this.element.Apellido_Paterno,
        Apellido_Materno: this.element.Apellido_Materno,
        Nombres: this.element.Nombres,
        Identificacion: this.element.Identificacion,
        Entidad_Bancaria: this.element.Entidad_Bancaria,
        CarnetIESS: this.element.CarnetIESS,
        Direccion: this.element.Direccion,
        Telefono_Fijo: this.element.Telefono_Fijo,
        Telefono_Movil: this.element.Telefono_Movil,
        Genero: this.element.Genero,
        Nro_Cuenta_Bancaria: this.element.Nro_Cuenta_Bancaria,
        Codigo_Categoria_Ocupacion: this.element.Codigo_Categoria_Ocupacion,
        Ocupacion: this.element.Ocupacion,
        Centro_Costos: this.element.Centro_Costos,
        Nivel_Salarial: this.element.Nivel_Salarial,
        EstadoTrabajador: this.element.EstadoTrabajador,
        Tipo_Contrato: this.element.Tipo_Contrato,
        Tipo_Cese: this.element.Tipo_Cese,
        EstadoCivil: this.element.EstadoCivil,
        TipodeComision: this.element.TipodeComision,
        FechaNacimiento: this.element.FechaNacimiento,
        FechaIngreso: this.element.FechaIngreso,
        FechaCese: this.element.FechaCese,
        FechaReingreso: this.element.FechaReingreso,
        Fecha_Ult_Actualizacion: this.element.Fecha_Ult_Actualizacion,
        EsReingreso: this.element.EsReingreso,
        Tipo_Cuenta: this.element.Tipo_Cuenta,
        FormaCalculo13ro: this.element.FormaCalculo13ro,
        FormaCalculo14ro: this.element.FormaCalculo14ro,
        BoniComplementaria: this.element.BoniComplementaria,
        BoniEspecial: this.element.BoniEspecial,
        Remuneracion_Minima: this.element.Remuneracion_Minima,
        Fondo_Reserva: this.element.Fondo_Reserva,
      };
      console.log("data agregar trabajador: ", data);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      return 'error: ' + error;
    }
  }
}

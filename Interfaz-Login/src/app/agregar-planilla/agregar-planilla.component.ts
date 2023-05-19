import { Component } from '@angular/core';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;
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


// interface TipoOperacion {
//   CodigoTipoOperacion: string,
//   NombreOperacion: string,
// }


@Component({
  selector: 'app-agregar-planilla',
  templateUrl: './agregar-planilla.component.html',
  styleUrls: ['./agregar-planilla.component.css']
})
export class AgregarPlanillaComponent {
  element = {
    Concepto: "",
    Prioridad: 1,
    TipoOperacion: "",
    Cuenta1: "",
    Cuenta2: "",
    Cuenta3: "",
    Cuenta4: "",
    MovimientoExcepcion1: "",
    MovimientoExcepcion2: "",
    MovimientoExcepcion3: "",
    Traba_Aplica_iess: "",
    Traba_Proyecto_imp_renta: "",
    Aplica_Proy_Renta: "",
    Empresa_Afecta_Iess: ""
  };

  tiposOperaciones: any;

  movimientosExcepcion12: any;
  movimientosExcepcion3: any;
  opcionesTraba_Aplica_iess: any;
  opcionesTrabAfecImpuestoRenta: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(`${apiUrl}/TipoOperacion`).subscribe(response => {

      this.tiposOperaciones = response;

      console.log("tiposOperaciones: ", this.tiposOperaciones);
    });

    this.http.get(`${apiUrl}/MovimientosExcepcion12`).subscribe(response => {

      this.movimientosExcepcion12 = response;

      console.log("movimientosExcepcion12: ", this.movimientosExcepcion12);
    });

    this.http.get(`${apiUrl}/MovimientosExcepcion3`).subscribe(response => {

      this.movimientosExcepcion3 = response;

      console.log("movimientosExcepcion3: ", this.movimientosExcepcion3);
    });

    this.http.get(`${apiUrl}/TrabaAfectaIESS`).subscribe(response => {

      this.opcionesTraba_Aplica_iess = response;

      console.log("TrabaAfectaIESS: ", this.opcionesTraba_Aplica_iess);
    });

    this.http.get(`${apiUrl}/TrabAfecImpuestoRenta`).subscribe(response => {

      this.opcionesTrabAfecImpuestoRenta = response;

      console.log("opcionesTrabAfecImpuestoRenta: ", this.opcionesTrabAfecImpuestoRenta);
    });
  }

  crearNuevoCC() {
    console.log("element a crear: ", this.element);

    try {

      const url = `${apiUrl}/CreateMovimientoPlanilla?conceptos=${this.element.Concepto}&prioridad=${this.element.Prioridad}&tipooperacion=${this.element.TipoOperacion}&cuenta1=${this.element.Cuenta1}&cuenta2=${this.element.Cuenta2}&cuenta3=${this.element.Cuenta3}&cuenta4=${this.element.Cuenta4}&MovimientoExcepcion1=${this.element.MovimientoExcepcion1}`;
      const url2 = `&MovimientoExcepcion2=${this.element.MovimientoExcepcion2}&MovimientoExcepcion3=${this.element.MovimientoExcepcion3}&Traba_Aplica_iess=${this.element.Traba_Aplica_iess}&Traba_Proyecto_imp_renta=${this.element.Traba_Proyecto_imp_renta}&Aplica_Proy_Renta=${this.element.Aplica_Proy_Renta}&Empresa_Afecta_Iess=${this.element.Empresa_Afecta_Iess}`;

      this.http.get<MovimientoPlanilla[]>(url).subscribe(async (response) => {


        console.log("Create planilla response: ", response);
        if (response == null || response == undefined) {
          alert("El movimiento de plantilla no se actualizó correctamente");
          return;
        }

        console.log("response: ", response[0]);

        if (response[0].Concepto == this.element.Concepto) {

          alert("El centro de costos se creó correctamente");
          //Redirecciona a home
          this.router.navigate(['/home']);

        } else {
          alert("El centro de costos no se actualizó correctamente");
        }

      })
    }
    catch (error) {

      console.log("error:", error);

    }
  }
  


}

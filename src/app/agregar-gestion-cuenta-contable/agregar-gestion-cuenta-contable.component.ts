import { Component } from '@angular/core';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;
interface GestionCC {
  Sucursal: number;
  CodigoConceptoNomina: number;
  CodigoCategoriaOcupacional: number;
  DescripcionConcepto: string;
  CodigoOperacion: string;
  CodigoCuenta: number;
  CodigoTipoCuenta: string;
  DescripcionCuenta: string;
  Mensaje: null;
}

@Component({
  selector: 'app-agregar-gestion-cuenta-contable',
  templateUrl: './agregar-gestion-cuenta-contable.component.html',
  styleUrls: ['./agregar-gestion-cuenta-contable.component.css'],
})
export class AgregarGestionCuentaContableComponent {
  element = {
    Sucursal: this.route.snapshot.paramMap.get('codigo'),
    CodigoConceptoNomina: 0,
    CodigoCategoriaOcupacional: 0,
    DescripcionConcepto: "",
    CodigoOperacion: "",
    CodigoCuenta: 0,
    CodigoTipoCuenta: "",
    DescripcionCuenta: "",
    Mensaje: null,
  };

  categoriasOcupaciones: any;
  tipoOperacion: any;
  codigoTipoCuenta: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    //categoriasOcupaciones
    this.http.get(`${apiUrl}/CategoriaOcupacional`).subscribe((response) => {
      this.categoriasOcupaciones = response;

      console.log('categoriasOcupaciones: ', this.categoriasOcupaciones);
    });
    //tipoOperacion
    
    this.http.get(`${apiUrl}/tipoOperacion`).subscribe((response) => {
      this.tipoOperacion = response;

      console.log('tipoOperacion: ', this.tipoOperacion);
    });

    this.http.get(`${apiUrl}/TipoCuenta`).subscribe((response) => {
      this.codigoTipoCuenta = response;

      console.log('codigoTipoCuenta: ',this.codigoTipoCuenta);
    });
  }

  actualizarValor(type: string, content: string) {
    // console.log('Actualiza: ', type, content);
    // if (type.localeCompare('TipoOperacion') === 0) {
    //   this.element.TipoOperacion = content;
    // }
    // if (type.localeCompare('MovimientoExcepcion1') === 0) {
    //   this.element.MovimientoExcepcion1 = content;
    // }
    // if (type.localeCompare('MovimientoExcepcion2') === 0) {
    //   this.element.MovimientoExcepcion2 = content;
    // }
    // if (type.localeCompare('MovimientoExcepcion3') === 0) {
    //   this.element.MovimientoExcepcion3 = content;
    // }
    // if (type.localeCompare('Traba_Aplica_iess') === 0) {
    //   this.element.Traba_Aplica_iess = content;
    // }
    // if (type.localeCompare('Traba_Proyecto_imp_renta') === 0) {
    //   this.element.Traba_Proyecto_imp_renta = content;
    // }
    // if (type.localeCompare('Aplica_Proy_Renta') === 0) {
    //   this.element.Aplica_Proy_Renta = content;
    // }
    // if (type.localeCompare('Empresa_Afecta_Iess') === 0) {
    //   this.element.Empresa_Afecta_Iess = content;
    // }
  }

  crearNuevoCC() {
    console.log('element a crear: ', this.element);

    try {
      console.log('element a crear: ', this.element);
      const url = `${apiUrl}/CreateGestionCuentaContable?Sucursal=${this.element.Sucursal}&CodigoConceptoNomina=${this.element.CodigoConceptoNomina}&CodigoCategoOcupacional=${this.element.CodigoCategoriaOcupacional}&CodigoOperacion=${this.element.CodigoOperacion}&CodigoCuenta=${this.element.CodigoCuenta}&CodigoTipoCuenta=${this.element.CodigoTipoCuenta}`;

      this.http
        .get<String>(url)
        .subscribe(async (response) => {
          console.log('La gestión de cuenta contable response: ', response);
          if (response == null || response == undefined || response != "Ingreso Exitoso") {
            alert('La gestión de cuenta contable no se actualizó correctamente');
            return;
          }

          console.log('response: ', response);

          if (response) {
            alert('La gestión de cuenta contable se creó correctamente');
            //Redirecciona a home
            this.router.navigate(['/gestion-cuenta-contable', this.route.snapshot.paramMap.get('codigo')]);
          } else {
            alert('La gestión de cuenta contable no se actualizó correctamente');
          }
        });
    } catch (error) {
      console.log('error:', error);
    }
  }
}

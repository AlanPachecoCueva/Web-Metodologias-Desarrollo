import { Component } from '@angular/core';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;

interface CentroDeCosto {
  Codigo: string;
  NombreCentroCostos: string;
  // Otros atributos...
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  title = 'Interfaz-Login';

  displayedColumns: string[] = ['Codigo', 'NombreCentroCostos', 'Borrar', 'Editar'];
  costos: CentroDeCosto[] = [];

  busquedaNombreCC: String = "";

  constructor(private http: HttpClient, private router: Router) { };

  ngOnInit(): void {
    this.http.get<CentroDeCosto[]>(`${apiUrl}/Costos`).subscribe(response => {

      this.costos = response;

      console.log("Costos: ", this.costos);
    });
  }

  async btnBorrar(element: any) {



    console.log("Cod: ", element);
    try {

      console.log("ELIMIINAR element.DescripcionCentroCostos: ", element.NombreCentroCostos, " | element.Codigo: ", element.Codigo);
      const url = `${apiUrl}/DeleteCentroDeCosto?codigoCentroCostos=${element.Codigo}&descripcioncentrocostos=${element.NombreCentroCostos}`;
      console.log("element: ", element);
      this.http.get<CentroDeCosto[]>(url).subscribe(async (response) => {

        console.log("response ELIMINAR: ", response);
        if (response[0].NombreCentroCostos == "Eliminación Correcta") {

          //Eliminar del arreglo
          const index = this.costos.indexOf(element);
          if (index !== -1) {
            console.log("Se elimina");
            this.costos.splice(index, 1);
          }

          alert("El centro de costos se eliminó correctamente");
          location.reload();
        } else {
          alert("El centro de costos no se eliminó correctamente");
        }

      })
    }
    catch (error) {
      console.log("error:", error);
    }
  }

  btnEditar(element: any) {

    console.log("Elemento a editar: ", element);

    this.router.navigate(['/editarCC', element.Codigo, element.NombreCentroCostos]);
  }

  goToNewCC() {
    this.router.navigate(['/nuevoCC']);
  }

  buscar() {
    console.log(this.busquedaNombreCC);

    if(this.busquedaNombreCC.length < 1){
      return;
    }

    try {

      const url = `${apiUrl}/SearchCentroDeCosto?descripcioncentrocostos=${this.busquedaNombreCC}`;

      // this.http.get(url).subscribe(async (response) => {
      //   console.log("Response: ", response);
      // })
      
        this.http.get<CentroDeCosto[]>(url).subscribe(async (response) => {
          
          if(response == null){
            alert("No se encontraron centros de costo con esa descripción");
            return;
          }
          if(response.length > 0 ){
            console.log("response: ", response);
            this.costos = response;
          }


        })
    }
    catch (error) {

      console.log("erroree:", error);

    }
  }
}
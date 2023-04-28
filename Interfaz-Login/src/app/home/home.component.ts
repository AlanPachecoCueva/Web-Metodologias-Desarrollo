import { Component } from '@angular/core';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


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
    this.http.get<CentroDeCosto[]>('https://localhost:5001/Usuario/Costos').subscribe(response => {

      this.costos = response;

      console.log("Costos: ", this.costos);
    });
  }

  btnBorrar(element: any) {



    console.log("Cod: ", element);
    try {

      console.log("element.DescripcionCentroCostos: ", element.NombreCentroCostos, " | element.Codigo: ", element.Codigo);
      const url = `https://localhost:5001/Usuario/DeleteCentroDeCosto?codigoCentroCostos=${element.Codigo}&descripcioncentrocostos=${element.NombreCentroCostos}`;
      console.log("element: ", element);
      this.http.get<CentroDeCosto[]>(url).subscribe(async (response) => {

        console.log("response: ", response[0]);
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

    this.router.navigate(['/editarCC', element.Codigo, element.NombreCentroCostos ]);
  }

  goToNewCC(){
    this.router.navigate(['/nuevoCC']);
  }

  buscar(){
    
  }
}
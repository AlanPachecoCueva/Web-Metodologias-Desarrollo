import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  constructor( private router: Router, private route: ActivatedRoute) { };

  goToWorkers(){
    let codigo: any;

    codigo = this.route.snapshot.paramMap.get('codigo') ? this.route.snapshot.paramMap.get('codigo') : "";
    console.log("codigo: ", codigo);
    this.router.navigate(['/listar-trabajadores', codigo]);
  }

  goGCC(){
    let codigo: any;

    codigo = this.route.snapshot.paramMap.get('codigo') ? this.route.snapshot.paramMap.get('codigo') : "";
    console.log("codigo: ", codigo);
    this.router.navigate(['/gestion-cuenta-contable', codigo]);
  }
  
}





import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FabricanteModel } from 'app/model/fabricantes.model';
import { FabricanteService } from 'app/service/fabricante.service';

@Component({
  selector: 'app-fabricante-detalhes',
  templateUrl: './fabricante-detalhes.component.html',
  styleUrls: ['./fabricante-detalhes.component.css']
})
export class FabricanteDetalhesComponent implements OnInit {

  fabricante: FabricanteModel = new FabricanteModel()
  constructor(private service: FabricanteService, private router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.service.save(this.fabricante).subscribe(
      x => this.router.navigate(['/admin/fabricante'])
    )
  }

}

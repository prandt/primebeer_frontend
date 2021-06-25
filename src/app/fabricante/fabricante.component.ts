import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FabricanteModel } from 'app/model/fabricantes.model';
import { FabricanteService } from 'app/service/fabricante.service';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {

  fabricantes: FabricanteModel[]
  constructor(private router: Router, private service: FabricanteService) { }

  ngOnInit(): void {
   this.list()
  }
  novo(){
    this.router.navigate(['admin/fabricante/novo'])
  }
  list(){
    this.service.list().subscribe(
      x => this.fabricantes = x
    )
  }

}

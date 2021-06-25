import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoCervejaModel } from 'app/model/tipoCerveja.model';
import { TipoCervejaService } from 'app/service/tipo-cerveja.service';

@Component({
  selector: 'app-tipocerveja',
  templateUrl: './tipocerveja.component.html',
  styleUrls: ['./tipocerveja.component.css']
})
export class TipocervejaComponent implements OnInit {

  tiposCerveja: TipoCervejaModel[]

  constructor(private router: Router, private service: TipoCervejaService) { }

  novo(){
    this.router.navigate(['admin/tipocerveja/novo'])
  }
  ngOnInit(): void {
    this.find()
  }

  find(){
    this.service.find().subscribe(
      elemento => this.tiposCerveja = elemento
    )
  }

}

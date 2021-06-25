import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoCervejaModel } from 'app/model/tipoCerveja.model';
import { TipoCervejaService } from 'app/service/tipo-cerveja.service';

@Component({
  selector: 'app-tipo-cerveja-detalhes',
  templateUrl: './tipo-cerveja-detalhes.component.html',
  styleUrls: ['./tipo-cerveja-detalhes.component.css']
})
export class TipoCervejaDetalhesComponent implements OnInit {

  tipoCerverja: TipoCervejaModel = new TipoCervejaModel()
  constructor(private service: TipoCervejaService, private router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.service.save(this.tipoCerverja).subscribe(x => {
      this.router.navigate(['admin/tipocerveja'])
    })
  }

}

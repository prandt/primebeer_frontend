import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CervejaModel } from 'app/model/cerveja.model';
import { CervejaService } from 'app/service/cerveja.service';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.css']
})
export class CervejaComponent implements OnInit {

  cervejas: CervejaModel[]
  tiposCerveja: any[]
  conteudo: any

  constructor(private service: CervejaService, private router: Router) {

   }

  ngOnInit(): void {
    this.list()
  }
  list() {
    this.service.find().subscribe(x => this.cervejas = x['content'])
  }
  
  teste(){
   console.log(this.cervejas)
  }
  details(id: number){
    this.router.navigate(['cervejas/'+id])
  }
}

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
  cervejaNome: string = ""

  constructor(private service: CervejaService, private router: Router) {

   }

  ngOnInit(): void {
    this.find("")
  }
  find(name: string) {
    if(name == "" || name == null){
      this.service.find().subscribe(objts => this.cervejas = objts)
    }else {
      this.service.findByName(name).subscribe(objts => this.cervejas = objts)
    }
    
  }

  details(id: number){
    this.router.navigate(['cervejas/'+id])
  }
}

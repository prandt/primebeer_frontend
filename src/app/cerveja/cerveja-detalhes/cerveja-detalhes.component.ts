import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CervejaModel } from 'app/model/cerveja.model';
import { FabricanteModel } from 'app/model/fabricantes.model';
import { ItemsModel } from 'app/model/items.model';
import { PedidoModel } from 'app/model/pedido.model';
import { TipoCervejaModel } from 'app/model/tipoCerveja.model';
import { VolumeModel } from 'app/model/volume.model';
import { CervejaService } from 'app/service/cerveja.service';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.component.html',
  styleUrls: ['./cerveja-detalhes.component.css']
})
export class CervejaDetalhesComponent implements OnInit {


  constructor(private route: ActivatedRoute,private router: Router, private service: CervejaService) { }
  cerveja: CervejaModel = new CervejaModel()
  photo: string
  volume: VolumeModel = new VolumeModel()
  typeBeer: TipoCervejaModel = new TipoCervejaModel()
  fabricante: FabricanteModel = new FabricanteModel()

  pedido: PedidoModel = new PedidoModel()
  items: ItemsModel[] = []
  item: ItemsModel = new ItemsModel()
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.findById(parseInt(params.get('id')))

    });

  }
  findById(id: number){
    this.service.findById(id).subscribe(x => {
      this.cerveja = x
      this.photo = x.photos[0].url
      this.volume = x.volume
      this.typeBeer = x.typeBeer
      this.fabricante = x.manufacturer
    })
  }
  comprar(){
    this.addToCart()
    this.router.navigate(['/carrinho'])
  }
  addToCart(){
    this.item.amount = 1
    this.item.beer = this.cerveja
    this.pedido.items = []
    if(localStorage.getItem('cart') != null){
      this.pedido = JSON.parse(localStorage.getItem('cart'))
      this.pedido.items.push(this.item)
    }
    else {
      this.pedido.items.push(this.item)
      
    }
    localStorage.setItem('cart',JSON.stringify(this.pedido))
  }

}

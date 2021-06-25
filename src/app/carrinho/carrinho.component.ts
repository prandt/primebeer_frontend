import { Component, OnInit } from '@angular/core';
import { PedidoModel } from 'app/model/pedido.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from 'app/service/pedido.service';
import { UsuarioService } from 'app/service/usuario.service';
import { UsuarioModel } from 'app/model/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private service: PedidoService, private serviceUsuario: UsuarioService, private router: Router) { }

  pedido: PedidoModel = new PedidoModel()
  usuario: UsuarioModel = new UsuarioModel()
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getItems()
  }
  getItems(): PedidoModel {
    if (localStorage.getItem('cart') != null) {
      return this.pedido = JSON.parse(localStorage.getItem('cart'))
    }
    return null
  }
  removerItem(id: number) {
    var index = 0
    this.pedido.items.forEach(obj => {
      if (obj.beer.id == id) {
        index = this.pedido.items.indexOf(obj)
      }
    })
    if (index > -1) {
      this.pedido.items.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.pedido))
  }
  findUserByid() {
    this.serviceUsuario.findById(parseInt(localStorage.getItem('userId'))).subscribe(
      usuario => this.usuario = usuario
    )
  }
  getTotal() {
    if (localStorage.getItem('cart') != null) {
      var total = 0
      this.pedido.items.forEach(obj => {
        total = total + obj.beer.price
      })
      return total
    }
  }
  save() {
    if (localStorage.getItem('userId') != null) {
      //this.findUserByid()
      this.pedido.user = this.usuario
      this.pedido.user.id = parseInt(localStorage.getItem('userId'))
      console.log(this.pedido)
      this.service.save(this.pedido).subscribe(x => {
        localStorage.removeItem('cart')
        this.router.navigate(['/cervejas'])
      })
    }
    else {
      this.router.navigate(['/login'])
    }
  }

}

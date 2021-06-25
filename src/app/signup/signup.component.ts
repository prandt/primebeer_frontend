import { formatDate, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'app/model/usuario.model';
import { UsuarioService } from 'app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel()
  dataFormatada: Date
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    console.log(this.isMinhaConta())
    if(this.isMinhaConta()){
      this.getCurrentUser()
      console.log(this.usuario)
    }
  }

  isMinhaConta(): boolean{
    return this.router.url === '/minhaconta' ? true : false
  }

  save(){
    this.usuario.birthDate = formatDate(this.dataFormatada, 'dd/MM/yyyy HH:mm', 'en-US')
    this.usuarioService.save(this.usuario).subscribe(
      result =>  this.router.navigate(['/login'])
    )   
  }
  update(){
    this.usuarioService.update(this.usuario, this.usuario.id).subscribe()   
  }
 
  getUserId(){
    return localStorage.getItem('userId')
  }
  getCurrentUser(){
    if(this.getUserId() != null){
      this.usuarioService.findById(parseInt(this.getUserId())).subscribe(
        x => {
          this.usuario = x
          this.usuario.street = x.addresses[0].street
          this.usuario.state = x.addresses[0].state
          this.usuario.postalCode = x.addresses[0].postalCode
          this.usuario.city = x.addresses[0].city
          this.usuario.telefone1 = x.phoneNumbers[0]
          this.usuario.birthDate = x.birthDate
        }
      )
    } 
  }
}

import { HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'app/model/login.model';
import { LoginService } from 'app/service/login.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'app/model/usuario.model';
import { UsuarioService } from 'app/service/usuario.service';
import { SidebarComponent } from 'app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginModel: LoginModel = new LoginModel()
  usuario: UsuarioModel
  constructor(private loginService: LoginService, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
   
  }
  login(){
    this.loginService.login(this.loginModel).subscribe(response => {
      const keys = response.headers.keys();
      const headers = keys.map(key =>
        `${response.headers.get(key)}`);
        localStorage.setItem('token', headers[0])
        localStorage.setItem('userId', headers[5])
        this.usuarioService.findById(headers[5]).subscribe(
          usuario => {
            usuario.perfis.map(x => {
              if(x == 'ADMIN'){
                localStorage.setItem('isAdmin', "yes")
              }
            })
          }
        )
        this.router.navigate(['/cervejas'])
    })
   
  }
  logout(){
    localStorage.clear()
  }
  toSignup(){
    this.router.navigate(['/signup'])
  }


}

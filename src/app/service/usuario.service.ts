import { Injectable } from '@angular/core';
import { UsuarioModel } from 'app/model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const api_url = "http://localhost:8080/users"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  save(usuario: UsuarioModel): Observable<any>{
    return this.http.post<any>(api_url, usuario)
  }

  update(usuario: UsuarioModel, id: number): Observable<any>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.put<any>(api_url +"/"+ id, usuario, options)
  }


  findById(id: Number): Observable<any>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };

    return this.http.get<any>(api_url + "/" + id, options)
  }

}

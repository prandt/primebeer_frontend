import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoModel } from 'app/model/pedido.model';
import { Observable } from 'rxjs';

const api_url = "http://localhost:8080/carts"

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  save(pedido: PedidoModel): Observable<any>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.post<any>(api_url,pedido, options)
  }
}

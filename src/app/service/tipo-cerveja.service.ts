import { Injectable } from '@angular/core';
import { TipoCervejaModel } from 'app/model/tipoCerveja.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const api_url = "http://localhost:8080/typebeers"

@Injectable({
  providedIn: 'root'
})
export class TipoCervejaService {

  constructor(private http: HttpClient) { }

  save(tipoCerveja: TipoCervejaModel): Observable<TipoCervejaModel>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.post<TipoCervejaModel>(api_url,tipoCerveja, options)
  }

  find(): Observable<TipoCervejaModel[]>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.get<TipoCervejaModel[]>(api_url,options)
  }
  findById(id: Number): Observable<TipoCervejaModel>{
    return this.http.get<TipoCervejaModel>(api_url + "/" + id)
  }
  
}

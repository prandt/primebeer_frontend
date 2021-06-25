import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FabricanteModel } from 'app/model/fabricantes.model';
import { Observable } from 'rxjs';

const api_url =  "http://localhost:8080/fabricantes";

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  constructor(private http: HttpClient) { }

  save(fabricante: FabricanteModel): Observable<FabricanteModel>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.post<FabricanteModel>(api_url,fabricante, options)
  }
  list(): Observable<FabricanteModel[]>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.get<FabricanteModel[]>(api_url,options)
  }
}

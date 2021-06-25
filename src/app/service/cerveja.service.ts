import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CervejaModel } from 'app/model/cerveja.model';
import { Observable } from 'rxjs';

const api_url =  "http://localhost:8080/beers";

@Injectable({
  providedIn: 'root'
})
export class CervejaService {

  constructor(private http: HttpClient) { 

  }

  save(cerveja: CervejaModel): Observable<CervejaModel>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.post<CervejaModel>(api_url, cerveja, options)
  }
  find():Observable<any[]>{
    return this.http.get<any[]>(api_url)
  }
  findByName(name: string):Observable<any[]>{
    return this.http.get<any[]>(api_url+"/name/"+name)
  }
  findById(id: number): Observable<CervejaModel>{
    return this.http.get<CervejaModel>(api_url+"/"+id)
  
  }
  upload(fileToUpload: File): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post<any>(api_url+"/photo", formData, { observe: "response" })
  
}
  
}

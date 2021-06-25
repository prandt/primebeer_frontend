import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'app/model/login.model';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


const api_url =  "http://localhost:8080/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http: HttpClient) {
    
  }
  
  login(login: LoginModel): Observable<any>{
      return this.http.post<any>(api_url, login, { observe: "response" })
  }

}

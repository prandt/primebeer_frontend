import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VolumeModel } from 'app/model/volume.model';
import { Observable } from 'rxjs';
const api_url = "http://localhost:8080/volumes"

@Injectable({
  providedIn: 'root'
})
export class VolumeService {

  constructor(private http: HttpClient) { }

  save(volume: VolumeModel): Observable<VolumeModel>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.post<VolumeModel>(api_url, volume, options)
  }

  find(): Observable<VolumeModel[]>{
    let options = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    };
    return this.http.get<VolumeModel[]>(api_url,options)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../model/live.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };



  constructor(
    private httpCliente: HttpClient
  ) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable>{
    return this.httpCliente.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

  public postLives(live: any): Observable<Live>{
    return this.httpCliente.post<any>(this.apiUrl, live, this.httpOption);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotApiService { 

  private url:string = 'http://localhost:3000/'

  constructor( private http: HttpClient) {
 
   
   }

   public result:any

 public apiAll(): Observable<any>{
  return  this.http.get<any>(`${this.url}results`)
      .pipe(
       res => res,
  ) }


  }


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  data:any;

  post(data:any):Observable<any>{
    console.log(data);
    return this.http.post(`http://localhost:4000/data/post`,data);
  }
}

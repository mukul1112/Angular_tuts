import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersservicesService {
  url='http://localhost:8080/hotels'
  constructor(private http:HttpClient) { }
    Users(){
      return this.http.get(this.url);

    }
  
}

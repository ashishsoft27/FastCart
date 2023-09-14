import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl:string="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  sub$=new Subject();

  userData(name:string){
    this.sub$.next(name);
  }

  getDataFromServer(endpoint:string){
    const url=this.baseUrl+endpoint
    console.log(url)
    return this.http.get(url);
  }

  postDataToServer(endpoint:string,body:any){
    const url=this.baseUrl+endpoint
    return this.http.post(url,body)
  }
}

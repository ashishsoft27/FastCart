import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  count:number=0
  constructor(private http:HttpClient) { }

  sub$ =new Subject()

  emitData(count:number){
    this.sub$.next(count)
  }
}

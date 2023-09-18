import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/core/http-service.service';
import { OrderServicesService } from 'src/app/core/order-services.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {

  order:any=[]
    constructor(private service:HttpServiceService,private orderservice:OrderServicesService){}

    ngOnInit(){
      this.order=localStorage.getItem('orderItems')
      this.order=JSON.parse(this.order)
      
      console.log(this.order)
    }
    
}

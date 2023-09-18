import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/core/http-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartData:any
  constructor(private cart:HttpServiceService){

  }
  ngOnInit(){
    this.cartData=localStorage.getItem('orderItems')
    this.cartData=JSON.parse(this.cartData)
    if(this.cart && this.cartData.length>0){
      
    }
  }
}

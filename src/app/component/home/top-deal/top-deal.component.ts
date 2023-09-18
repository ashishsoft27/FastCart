import { AfterViewChecked, Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpServiceService } from 'src/app/core/http-service.service';
import { OrderServicesService } from 'src/app/core/order-services.service';

@Component({
  selector: 'app-top-deal',
  templateUrl: './top-deal.component.html',
  styleUrls: ['./top-deal.component.scss']
})
export class TopDealComponent implements OnInit,AfterViewChecked {
topDealsList:any=[]
quantity:any;
totalprize!:number
count:number=0
orderData:any=[]
token:any;

constructor(private service:HttpServiceService,private orderService:OrderServicesService, private router:Router){}
  ngOnInit(){
    
    this.service.getDataFromServer('top-deals').subscribe(
      (el:any)=>{
        if(el && el.products && el.products.length>0){
          console.log('top-deals',el)
          this.topDealsList=el.products;
          this.topDealsList.quantity=0;
          this.topDealsList.totalprize=0
          console.log(this.topDealsList.quantity)
        }
  
      },
      ()=>{}
    )
  }

  settotalPrice(index:number,qty:any){
    this.topDealsList[index].w=qty.w;
    this.topDealsList[index].sp=qty.sp;
    this.topDealsList[index].dis_val=qty.dis_val
  }

  total(prize:number,index:number){
    this.topDealsList[index].totalprize=this.topDealsList[index].quantity*prize
  }

  addToCart(index:number){
    if(this.token){

      if(this.topDealsList[index].quantity>0){
    this.obj.productName=this.topDealsList[index].llc_n
    this.obj.productPrize=this.topDealsList[index].sp
    this.obj.productQuantity=this.topDealsList[index].quantity
    this.obj.productPack=this.topDealsList[index].w;
    this.obj.productTotalPrize=this.topDealsList[index].totalprize
    this.obj.img=this.topDealsList[index].p_img_url
    this.obj.discount=this.topDealsList[index].dis_val

    this.orderData.push({...this.obj})
    console.log(this.orderData)
    localStorage.setItem('orderItems',JSON.stringify(this.orderData))
    alert("orderd item added in to c    art")
    this.topDealsList[index].quantity=''
    console.log(localStorage.length)
    
    this.count++
    this.orderService.emitData(this.count );
      }
      else{
        alert("please give quantity")
      }
    }
    else{
      alert("please login first")
      this.router.navigate(['/loginnew'])
    }
  }

  ngAfterViewChecked(){
this.token=localStorage.getItem('token')
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
obj :any=new productDetails();
}
class productDetails{
  productName!:string
  productPrize!:number
  productQuantity!:number
  productTotalPrize!:number
  productPack!:any
  img!:string;
  discount!:number
}

import { Component,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpServiceService } from 'src/app/core/http-service.service';

@Component({
  selector: 'app-top-deal',
  templateUrl: './top-deal.component.html',
  styleUrls: ['./top-deal.component.scss']
})
export class TopDealComponent implements OnInit {
topDealsList:any=[]

constructor(private service:HttpServiceService){}
  ngOnInit(){
    
    this.service.getDataFromServer('top-deals').subscribe(
      (el:any)=>{
        if(el && el.products && el.products.length>0){
          console.log('top-deals',el)
          this.topDealsList=el.products;
        }
  
      },
      ()=>{}
    )
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

}

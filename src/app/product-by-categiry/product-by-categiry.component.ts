import { Component ,OnInit} from '@angular/core';
import { HttpServiceService } from '../core/http-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-by-categiry',
  templateUrl: './product-by-categiry.component.html',
  styleUrls: ['./product-by-categiry.component.scss']
})
export class ProductByCategiryComponent implements OnInit {
  categiryList:any=[]
  productList:any[]=[];
  
  selectedCategiry!:string;
  constructor(private http:HttpServiceService){}

  ngOnInit(){

    this.http.getDataFromServer('topcats').subscribe(
      (el:any)=>{
        if(el && el.length>0){
          console.log(el)
          
          this.categiryList=el.map((obj:any)=>obj.top_category.name);
          this.categiryList.unshift("All")
          // this.categiryList.unshift("All")
          console.log(this.categiryList)
          this.getData('All')
        }
      }
    )
    }
    getData(categoryName:string){
      this.selectedCategiry=categoryName
      const endpoint='category?categoryName='+categoryName;
    this.http.getDataFromServer(endpoint).subscribe(
      (response:any)=>{
        if(response!= undefined && response[0]!=undefined && response[0].products && response[0].products.length > 0){
          console.log("response")
          console.log(response)
          this.productList=response[0].products[0].product_info.products;
        }

        else{
          this.productList=[];
        }
      }
    )
  }



  // getData(){
  //   this.http.getDataFromServer('tab_info').subscribe(
  //     (el:any)=>{
  //       if(el && el.length>0){
  //         console.log(el)
  //         console.log("Hi Ashish")
  //         console.log(el[0].product_info.products[0].p_img_url)
  //         this.productList=el[0].product_info.products;
  //         for(var i=0;i<this.productList.length;i++){
  //           this.product[i]=this.productList[i].p_img_url
  //         }
  //       }
  //     }
  //   )
  // }

  // console.log(el[0].product_info.products[0].p_img_url)

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

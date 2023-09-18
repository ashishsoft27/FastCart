import { AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/core/http-service.service';
import { OrderServicesService } from 'src/app/core/order-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewChecked {
  userName:any='';
  orderCount!:number
  constructor(private router:Router,private http:HttpServiceService,private orderHttp:OrderServicesService){}

  navigate(){
    this.router.navigate(['loginnew'])
  }  
  ngOnInit(){
    // this.http.sub$.subscribe(
    //   (response:any)=>{this.userName=response}
    // )}

    this.orderHttp.sub$.subscribe(
      (response:any)=>{
        console.log(response)
        // console.log(response.length)
        this.orderCount=response
      }
    )
  }
    ngAfterViewChecked(){
    // this.http.sub$.subscribe(
    //    (response:any)=>{
    //     console.log(response  )
    //     this.userName=response}
    // )
      this.userName=localStorage.getItem('token')

    // this.orderHttp.sub$.subscribe(
    //   (response:any)=>{
    //     console.log(response)
    //     console.log(response.length)
    //     this.orderCount=response.length}
    // )

    }
  
  logout(){
    const confirmation=confirm("Do you want to log out")
    if(confirmation){
      this.userName='';
    localStorage.removeItem('token')
    localStorage.removeItem('orderItems')
    this.router.navigate(['loginnew'])
    }
  }
  remove(){
    //localStorage.clear();
  }
}

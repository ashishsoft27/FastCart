import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/core/http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName:string=""
  constructor(private router:Router,private http:HttpServiceService){}

  navigate(){
    this.router.navigate(['loginnew'])
  }  
  ngOnInit(){
    this.http.sub$.subscribe(
      (response:any)=>{this.userName=response}
    )
  }
  logout(){
    const confirmation=confirm("Do you want to log out")
    if(confirmation){
      this.userName='';
    localStorage.removeItem('token')
    this.router.navigate(['loginnew'])
    }
  }
}

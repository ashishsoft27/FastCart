import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../core/http-service.service';

@Component({
  selector: 'app-loginnew',
  templateUrl: './loginnew.component.html',
  styleUrls: ['./loginnew.component.scss']
})
export class LoginnewComponent implements OnInit{
  loginData!:FormGroup

  constructor(private fb:FormBuilder,private router:Router,private http:HttpServiceService){}
  ngOnInit(){
    this.loginData=this.fb.group({
      'email':['',[]],
      'pass':['',[]]
    })
  }
  check(){
    console.log("Hi Ashish")
    const endpoint='users?email='+this.loginData.get('email')?.value+'&&pass='+this.loginData.get('pass')?.value
    console.log(endpoint)
    this.http.getDataFromServer(endpoint).subscribe(
      (response:any)=>{console.log(response)
      if(response &&response.length>0){
        alert("Welcome "+response[0].user)
        this.http.userData(response[0].user)
        localStorage.setItem('token',response[0].user)
        this.router.navigate(['/home'])
      }
      else{
        alert("please enter valid Details")
      }
      }
    )
  }

}

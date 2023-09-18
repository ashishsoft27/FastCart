import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../core/http-service.service';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit,OnDestroy {

  signinData!:FormGroup
  verifyOtp:boolean=false
  getOtp:boolean=true
  otp!:number
  sub!:Subscription
otptimer!:number
otpFlag:boolean=false
verifiedOTP:boolean=false
submitData:boolean=false;

  constructor(private fb:FormBuilder,private router:Router,private http:HttpServiceService){

  }
  ngOnInit() {
    this.signinData=this.fb.group({
      'user':['',[Validators.required]],
      'email':['',[Validators.required]],
      'pass':['',[Validators.required]],
      'mobno':['',[Validators.required]],
      'verifyOtp':['',[Validators.required]]
    })
  }

  save(){
    if(this.signinData.valid){
    this.http.postDataToServer('users',this.signinData.value).subscribe(
      (response:any)=>{console.log(response)
      alert("Data Succefully saved")
      this.router.navigate(['/loginnew'])
      }
    )
    }
    else{
      alert("please fill all field")
    }
    
  }

  getotp(){
    this.verifyOtp=true
    this.getOtp=false;
    this.otp=(100000+Math.random()*90000)
    this.otp=Number(this.otp.toFixed(0))
    console.log(this.otp)
    this.sub=interval(1000).subscribe(
      (response)=>{console.log(response)
      if((response && response<31) || response==0){
        this.otptimer=30-response
        
      }  
      else{
        this.sub.unsubscribe()
        this.verifyOtp=false;
        this.getOtp=true
      }
      },
      ()=>{},
      ()=>{}
    )
  }

  verifyotp(){
    if(this.signinData.get('verifyOtp')?.value==this.otp){
      console.log("Valid User")
      this.getOtp=false;
      this.verifyOtp=false
    this.signinData.get('verifyOtp')?.setValue("true")
      this.sub.unsubscribe();
      
    }
    else{
      alert("Please enter Valid OTP")
    }
  }
  ngOnDestroy(){
    // this.sub.unsubscribe()
  }
}

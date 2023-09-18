import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';
import { HttpServiceService } from 'src/app/core/http-service.service';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.scss']
})
export class MydataComponent implements OnInit {
  myData: any;
  orderData: any;
  otpTimer!: number
  orderForm!: FormGroup
  display: boolean = false
  getotp: boolean = true
  verifyotp: boolean = false
  otp: number = 0
  sub!: Subscription
  flag: boolean = false;
  otpflag: boolean = true
  constructor(private service: HttpServiceService, private fb: FormBuilder) { }

  ngOnInit() {

    this.getData()

    this.createData()

  }
  createData() {
    this.orderForm = this.fb.group({
      'user': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'mobno': ['', [Validators.required]],
      'verifyOtp': ['', [Validators.required]]
    })
  }

  getData() {
    console.log("hi getdata")
    const endpoint = 'users?user=' + localStorage.getItem('token')
    this.service.getDataFromServer(endpoint).subscribe(
      (response: any) => { this.myData = response }
    )

    this.orderData = (localStorage.getItem('orderItems'))
    this.orderData = JSON.parse(this.orderData);
  }

  editData() {
    this.display = true
    const endpoint = 'users?user=' + localStorage.getItem('token')
    this.service.getDataFromServer(endpoint).subscribe(
      (response: any) => {
        this.obj = response[0]
        console.log(this.obj)
        this.orderForm.get('user')?.setValue(this.obj.user)
        this.orderForm.get('email')?.setValue(response[0].email)
        this.orderForm.get('mobno')?.setValue(response[0].mobno)


      }
    )
  }
  cancel() {
    this.display = false
    this.getData()

  }
  update() {
    
    if (this.flag == true && this.orderForm.valid) {
      this.obj.email = this.orderForm.get('email')?.value
      this.obj.mobno = this.orderForm.get('mobno')?.value
      const endpoint = 'users/' + this.obj.id
      console.log(this.obj)
      this.service.putDataToServer(endpoint, this.obj).subscribe(
        (response) => { console.log(response) }
      )
      
      this.verifyotp = false
      this.flag = true
      this.display=false
      this.createData()
      this.getData()
    }
    else {
      alert("please fill all data")
      this.flag = false
    }
  }

  getOtp() {
    if (this.orderForm.get('mobno')?.value) {
      this.verifyotp = true
      this.getotp = false;
      this.otp = (100000 + Math.random() * 90000)
      this.otp = Number(this.otp.toFixed(0))
      console.log(this.otp)
      this.sub = interval(1000).subscribe(
        (response) => {
          console.log(response)
          if ((response && response < 31) || response == 0) {
            this.otpTimer = 30 - response

          }
          else {
            this.sub.unsubscribe()
            this.verifyotp = false;
            this.getotp = true
          }
        },
        () => { },
        () => { }
      )
    }
    else {
      alert('please fill mob no')
    }
  }

  verify() {
    console.log(this.otp)
    console.log(this.orderForm.get('verifyOtp')?.value)
    if (this.orderForm.get('verifyOtp')?.value == this.otp) {
      console.log("Valid User")
      this.getotp = false;
      this.verifyotp = false
      // this.obj.verifyOTP=true

      this.flag = true
      this.sub.unsubscribe();

    }
    else {
      alert("Please enter Valid OTP")
      this.flag = false
    }
  }

  obj: any = new MyData()
}
class MyData {
  user!: string
  email!: string
  pass!: string;
  mobno!: number
  verifyOtp!: number
  id!: number
}
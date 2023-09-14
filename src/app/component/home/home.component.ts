import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  flag:boolean=false
  data:any;
  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.data=this.route.snapshot.queryParamMap.get('user');
    console.log(this.data)
  }

  check(){
    this.flag=true
  }
  check1(){
    this.flag=false
  }
}

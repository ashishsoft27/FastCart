import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  flag:boolean=false
  check(){
    this.flag=true
  }
  check1(){
    this.flag=false
  }
}

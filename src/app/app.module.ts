import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/home/navbar/navbar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealComponent } from './component/home/top-deal/top-deal.component';
import { ProductByCategiryComponent } from './product-by-categiry/product-by-categiry.component';
import { SigninComponent } from './signin/signin.component';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopofferComponent } from './component/home/topoffer/topoffer.component';
import { MyorderComponent } from './component/home/myorder/myorder.component';
import { MydataComponent } from './component/home/mydata/mydata.component';
import { EditUserComponent } from './component/home/edit-user/edit-user.component';
import { CartComponent } from './component/home/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopDealComponent,
    ProductByCategiryComponent,
    SigninComponent,
    LoginnewComponent,
    TopofferComponent,
    MyorderComponent,
    MydataComponent,
    EditUserComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

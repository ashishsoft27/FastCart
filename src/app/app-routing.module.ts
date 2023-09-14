import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/home/navbar/navbar.component';
import { ProductByCategiryComponent } from './product-by-categiry/product-by-categiry.component';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { SigninComponent } from './signin/signin.component';
import { authGuardGuard } from './core/auth-guard.guard';
import { MyorderComponent } from './userdata/myorder/myorder.component';
import { MydataComponent } from './userdata/mydata/mydata.component';


const routes: Routes = [
                        {path:'home',component:HomeComponent},
                        {path:'navbar',component:NavbarComponent},
                        {path:'product-by-categiry',component:ProductByCategiryComponent,canActivate:[authGuardGuard]},
                        {path:'loginnew',component:LoginnewComponent},
                        {path:'signin',component:SigninComponent},
                        {path:'myorder',component:MyorderComponent},
                        {path:'mydata',component:MydataComponent},
                        {path:'',redirectTo:'home',pathMatch:'full'}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

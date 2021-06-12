import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path:'product',component:ProductPageComponent},
  {path:'FeedbackPageComponent',component:FeedbackPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

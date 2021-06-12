import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Router}from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  flagsCheck = false;
  message = "";
  constructor(private formBuilder :FormBuilder,private feed:Router) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  ngOnInit() {
  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
      
    }
    
  }
 
   checkLogin(){
     this.flagsCheck = true;
    if(this.loginForm.controls['username'].value ==="siva" && this.loginForm.controls['password'].value ==="123456"){
      this.message ="login success"
      this.feed.navigate(['/product']);
      
    }else{
      this.message ="Username or password is incorrect";
    }

  }

}

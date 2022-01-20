import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ILoginResult} from '../user';
import {LoginService} from'./login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :any;msgError:string='';msgSucess:string='';
  isSubmitted=false;
  constructor(private loginService: LoginService, private router:Router, private formBuilder:FormBuilder) { }
  

  ngOnInit(): void {
   
    this.loginForm = this.formBuilder.group({
     userName:['',Validators.required],
     password:['',Validators.required]
    })
  }
  login(){

    this.msgError = '';
     if(this.loginForm.invalid){this.msgError = 'Please Enter UserName and Password '; return}
     
       this.loginService.login(this.loginForm.value).then(x=>{
         this.isSubmitted = x.loginSucessful
         if(this.isSubmitted)
         this.msgSucess = 'Succesfully logged in as '+ this.loginForm.value.userName;
  
        })

  }
  clearmsgs()
  {
    this.msgError = '';
    this.msgSucess = '';

  }
  

}

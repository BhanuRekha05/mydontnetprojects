import { Injectable } from '@angular/core';
import { ILoginResult } from '../user';
@Injectable({
  providedIn: 'root'
})
export class LoginService implements ILoginResult {

  constructor() { }
  loginSucessful: boolean=false;
  userName: string='';
  password: string='';
   login(loginForm:ILoginResult): Promise<ILoginResult> {
     let user =loginForm
     user.loginSucessful = true;
     return new Promise<ILoginResult>((resolve) => {
        resolve(user)
        
     })
      
  }

}
 

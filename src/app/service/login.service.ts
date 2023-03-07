import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isLogin = new BehaviorSubject<boolean>(false);

  loginAPI(data: any){
    console.log(data);
    return this.http.post(`https://dummyjson.com/auth/login/${data.username}${data.passwordpassword}`, {});
  }

}

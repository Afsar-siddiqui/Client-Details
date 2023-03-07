import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isLogin = new BehaviorSubject<boolean>(false);

  loginAPI(data: any){
    console.log(data);
    //username: 'kminchelle', password: '0lelplR', for login
    return this.http.post(`https://dummyjson.com/auth/login`, { username: data.username, password: data.password}, httpOptions);
  }

}

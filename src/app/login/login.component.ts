import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm!: FormGroup;
  /* userName: any;
  password: any; */
  constructor(private fb: FormBuilder, private service: LoginService, private router: Router){

  }

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
  })
  }

  userId:any;
  onSubmit(){
    let data = this.loginForm.value;
    console.log(data);
    this.service.loginAPI(data).subscribe({
      next: (res)=>{
        console.log(res);
        sessionStorage.setItem("userId", '2');
        this.router.navigate(['dashboard']);
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private service: LoginService){

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
        sessionStorage.setItem("userId", '2')
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}

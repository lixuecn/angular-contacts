import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  signinFrom={
    email:'',
    password:''
  }
  email_err:string

  ngOnInit() {
  }
  signin(){
    let formData=this.signinFrom
    this.http.post('http://localhost:3000/session',formData)
    
    .subscribe((res:any)=>{
      this.email_err=''
      window.localStorage.setItem('auth_token',res.token)
      window.localStorage.setItem('user_info',JSON.stringify(res.user))

      this.router.navigate(['/'])
    },
    err=>{
      console.log(err)
      if(err.status===401){
        this.email_err='登录失败'
      }
    },
    ()=>{
      console.log(111)
    }
    
    )
  }

}

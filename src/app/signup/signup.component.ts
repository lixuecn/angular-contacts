import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  signupFrom={
    email:'',
    password:''
  }
  email_err:string

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  ngOnInit() {
  }
  signup(){
    console.log(1111)
    let formData=this.signupFrom
    this.http.post('http://localhost:3000/users',formData)
    
    .subscribe((res:any)=>{
      this.email_err=''
      window.localStorage.setItem('auth_token',res.token)
      window.localStorage.setItem('user_info',JSON.stringify(res.user))
      this.router.navigate(['/'])
    },
    err=>{
      console.log(err)
      if(err.status===409){
        this.email_err='邮箱被占用'
      }
    },
    ()=>{
      console.log(111)
    }
    
    )
  }

}

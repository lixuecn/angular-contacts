import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  user=JSON.parse(window.localStorage.getItem('user_info')||'{}')

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
  }
  signout(){
    this.http.delete('http://localhost:3000/session')
    .subscribe((res:any)=>{
      window.localStorage.clear()
      this.router.navigate(['/'])
    },
    err=>{
      console.log(err)
     
    },
    ()=>{
      console.log(111)
    }
  )
  }
}

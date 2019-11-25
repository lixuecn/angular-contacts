import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.less']
})
export class ContactNewComponent implements OnInit {
  public formData={
    name:'',
    email:'',
    phone:''
  }
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
  }
  addContact(){
      this.http.post('http://localhost:3000/contacts',this.formData)
      .subscribe(
        res=>{
          this.router.navigate(['/contacts'])
        },
        err=>{
          console.log(err)
        }
      )

  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Router} from '@angular/router'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  public contacts:any

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.getList()
  }
  getList(){
    this.http.get('http://localhost:3000/contacts').subscribe(
      res=>{
          this.contacts=res
      },
      err=>{
        console.log(err)
      }
    )
  }
  newContact(){
    this.router.navigate(['/contacts/new'])
  }
  deleteContactById(id){
      this.http.delete(`http://localhost:3000/contacts/${id}`)
      .subscribe(
        res=>{
          this.getList()
        },
        err=>{
          console.log(err)
        }
      )
  }
  editContact(id){
    console.log(id)
    this.router.navigate(['/contacts/edit',id])
  }


}

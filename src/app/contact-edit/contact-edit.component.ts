import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {
  public formData:any={
    name: "",
    email: "",
    phone: "",
    id: 3
  }
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    const contactId=this.route.snapshot.params.id
    this.getContactById(contactId)
  }

  getContactById(id){
    this.http.get(`http://localhost:3000/contacts/${id}`)
    .subscribe(
      res=>{
        this.formData=res
      },
      err=>{
        console.log(err)
      }
    )

  }
  editContact(){
    const contactId=this.formData.id
    this.http.patch(`http://localhost:3000/contacts/${contactId}`,this.formData)
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component'
import {SignupComponent} from './signup/signup.component'
import {LayoutComponent} from './layout/layout.component'
import {ContactListComponent} from './contact-list/contact-list.component'
import {ContactNewComponent} from './contact-new/contact-new.component'
import {ContactEditComponent} from './contact-edit/contact-edit.component'
import {TagEditComponent} from './tag-edit/tag-edit.component'
import {TagListComponent} from './tag-list/tag-list.component'
import {TagNewComponent} from './tag-new/tag-new.component'
import { AuthGuard }                from './auth.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/contacts',
    pathMatch:'full'
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'tags',
    component:LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        component:TagListComponent
      },
      {
        path:'new',
        component:TagNewComponent
      },
      {
        path:'edit',
        component:TagEditComponent
      }
    ]
  },
  {
    path:'contacts',
    component:LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        component:ContactListComponent
      },
      {
        path:'new',
        component:ContactNewComponent
      },
      {
        path:'edit/:id',
        component:ContactEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {BooksComponent} from './books/books.component';
import {AuthorsComponent } from './authors/authors.component';
import {RegisterComponent } from './register/register.component';
import {LoginComponent } from './login/login.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AutherComponent } from './admin/auther/auther.component';
import { AutherUpdateComponent } from './admin/auther-update/auther-update.component';
import { AutherAddComponent } from './admin/auther-add/auther-add.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/categories',
    component: CategoriesComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component:DashboardComponent,
    children:[
      {
        path: 'categories',
        component:AdminCategoryComponent

      },
      {
        path: 'auther',
        component:AutherComponent,
        
      },
      {
        path: 'auther/update/:id',
        component:AutherUpdateComponent,
      },
      {
        path: 'auther/add',
        component:AutherAddComponent,
      }
    
    ]

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

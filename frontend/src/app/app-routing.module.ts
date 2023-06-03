import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {BooksComponent} from './books/books.component';
import {AuthorsComponent } from './authors/authors.component';
import {RegisterComponent } from './register/register.component';
import {LoginComponent } from './login/login.component';
import {AuthorDetailsComponent} from './author-detalis/author-detalis.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AutherComponent } from './admin/auther/auther.component';
import { AutherUpdateComponent } from './admin/auther-update/auther-update.component';
import { AutherAddComponent } from './admin/auther-add/auther-add.component';
import { AdminBookComponent } from './admin/admin-book/admin-book.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { authGuard } from './guard/auth.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { ProfileComponent } from './profile/profile.component';

import { authuserGuard } from './guard/authuser.guard';
import { SearchComponent } from './search/search.component';
import { AddBookComponent } from './admin/add-book/add-book.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },{
    path: 'category/:id',
    component:CategoryBooksComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent
  },
  {
    path:"search",
    component:SearchComponent
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
    path: 'author-details/:id',
    component: AuthorDetailsComponent
  },
  {
    path: 'admin/login',
    component:AdminLoginComponent
  },
  {path:'myProfile',
  canActivate:[authuserGuard],
    component: ProfileComponent
  },
  {
    path: 'admin',
    canActivate:[authGuard],
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
      },{
        path: 'books',
        component:AdminBookComponent,
      },
      {
        path: 'books/add',
        component:AddBookComponent,
      }

    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

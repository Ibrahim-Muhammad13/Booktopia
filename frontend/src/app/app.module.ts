import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';

import { CategoryValidationPipe } from './pipes/category-validation.pipe';

import { AutherComponent } from './admin/auther/auther.component';
import { AutherUpdateComponent } from './admin/auther-update/auther-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutherAddComponent } from './admin/auther-add/auther-add.component';
import {AuthorsCardComponent} from './authors-card/authors-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    BooksComponent,
    AuthorsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    AdminCategoryComponent,
   
    CategoryValidationPipe

    AutherComponent,
    AutherUpdateComponent,
    AutherAddComponent,
    AuthorsCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

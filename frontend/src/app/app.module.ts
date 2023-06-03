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
import { AdminBookComponent } from './admin/admin-book/admin-book.component';
import { AuthorDetailsComponent } from './author-detalis/author-detalis.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { AuthorBookDetailsComponent } from './author-book-details/author-book-details.component';
import { StarRatingPipe } from './pipes/star-rating.pipe';
import { HomePart2Component } from './home-part2/home-part2.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeQuoteComponent } from './home-quote/home-quote.component';

import { FooterComponent } from './footer/footer.component';


import {NgxPaginationModule} from 'ngx-pagination';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { UpdateBookComponent } from './admin/update-book/update-book.component';





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
    CategoryValidationPipe,
    AutherComponent,
    AutherUpdateComponent,
    AutherAddComponent,
    AuthorsCardComponent,
    AdminBookComponent,
    AuthorDetailsComponent,
    CategoryBooksComponent,
    AdminLoginComponent,
    BookDetailsComponent,
    AuthorBookDetailsComponent,
    StarRatingPipe,
    HomePart2Component,
    ProfileComponent,
    HeaderComponent,
    SearchComponent,
    HomeQuoteComponent,
    AddBookComponent,
    UpdateBookComponent,
    FooterComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

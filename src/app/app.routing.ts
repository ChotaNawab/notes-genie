import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { PopularcoursesComponent } from './popularcourses/popularcourses.component';
import { MpcdetailsComponent} from './mpcdetails/mpcdetails.component';

import { EventComponent } from './event/event.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import {  ForgotComponent } from './forgot/forgot.component';
import {  PasswordComponent } from './password/password.component';
import {  BooksdetailsComponent } from './booksdetails/booksdetails.component';
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: MainpageComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  //  {
  //   path: 'signup', component: SignupComponent
  //  },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'flashcard', component: FlashcardComponent
  },
  {
    path: 'popularcourses', component: PopularcoursesComponent
  },
  {
    path: 'mpcdetails', component:  MpcdetailsComponent
  },
  {
    path: 'event', component: EventComponent
  },
  {
    path: 'scholarships', component: ScholarshipsComponent
  },
  {
    path: 'forgot', component: ForgotComponent
  },
  {
    path: 'password', component: PasswordComponent
  },
  {
    path: 'booksdetails', component:  BooksdetailsComponent
  }
  
];

export const AppRoutingProvider: any[] = [];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {CategoriesComponent} from './categories/categories.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
// import { BooksComponent } from './books/books.component';
// import { FlashcardComponent } from './flashcard/flashcard.component';
import { FcdetailComponent } from './fcdetail/fcdetail.component';
import { EventComponent } from './event/event.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { ForgotComponent } from './forgot/forgot.component';
import {PasswordComponent} from "./password/password.component";
import {BooksdetailsComponent} from "./booksdetails/booksdetails.component";
import {PopularcoursesComponent} from "./popularcourses/popularcourses.component";
import {MpcdetailsComponent} from "./mpcdetails/mpcdetails.component";
// import {TutorComponent} from "./tutor/tutor.component";
import {TeachersComponent} from "./teachers/teachers.component";
import { MoreTeachersComponent } from "./more-teachers/more-teachers.component";
import {BecameTutorComponent} from "./became-tutor/became-tutor.component";

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainpageComponent
  },
  {
    path: 'home', component: MainpageComponent
  },
  // {
  //   path: 'categories', component: CategoriesComponent
  // },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },

  // {
  //   path: 'signup', component: SignupComponent
  // },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  // { path: 'mainpage', loadChildren: './mainpage/mainpage.module#MainpageModule' },

  {
    path: 'login', component: LoginComponent
   },
  // {
  //   path: 'books', component: BooksComponent
  // },
  { path: 'books', loadChildren: './books/books.module#BooksModule' },

  // {
  //   path: 'flashcard', component: FlashcardComponent
  // },
  { path: 'flashcard', loadChildren: './flashcard/flashcard.module#FlashcardModule' },

  {
    path: 'fcdetail', component: FcdetailComponent
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
    path: 'booksdetails', component: BooksdetailsComponent
  },
  {
    path: 'popularcourses', component: PopularcoursesComponent
  },
  {
    path: 'mpcdetails', component: MpcdetailsComponent
  },
  // {
  //   path: 'tutor', component: TutorComponent
  // },
  { path: 'tutor', loadChildren: './tutor/tutor.module#TutorModule' },

  {
    path: 'teachers', component: TeachersComponent
  },
  {
    path: 'more-teachers', component: MoreTeachersComponent
  },
  {
    path: 'became-tutor', component: BecameTutorComponent
  }


];

export const AppRoutingProvider: any[] = [];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routing} from './app.routing';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./includes/header/header.component";
import {FooterComponent} from "./includes/footer/footer.component";
// import {SignupComponent} from "./signup/signup.component";
import {CategoriesComponent} from "./categories/categories.component";
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { BooksComponent } from './books/books.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupService} from './login/login.service';
import { MyserviceService } from './myservice.service';
import { HttpModule } from '@angular/http';
import { MpcdetailsComponent} from './mpcdetails/mpcdetails.component';
import { PopularcoursesComponent } from './popularcourses/popularcourses.component';

import { EventComponent } from './event/event.component';
import {  ForgotComponent } from './forgot/forgot.component';
import {  PasswordComponent } from './password/password.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import {  BooksdetailsComponent } from './booksdetails/booksdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FlashcardComponent,
    CategoriesComponent,
    ScholarshipsComponent,
    BooksdetailsComponent,
    PasswordComponent,
    ForgotComponent,
    MainpageComponent,
    // SignupComponent,
    LoginComponent,
    EventComponent,
    BooksComponent,
    PopularcoursesComponent,
    MpcdetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'NotesGenie' }),
    BrowserTransferStateModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    SignupService,
    MyserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

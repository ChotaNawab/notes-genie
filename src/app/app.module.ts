import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routing} from './app.routing';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./includes/header/header.component";
import {FooterComponent} from "./includes/footer/footer.component";
// import {SignupComponent} from "./signup/signup.component";
// import {CategoriesComponent} from "./categories/categories.component";
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';

// import { BooksComponent } from './books/books.component';
// import { FlashcardComponent } from './flashcard/flashcard.component';
import { FcdetailComponent } from './fcdetail/fcdetail.component';
import { EventComponent } from './event/event.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupService} from "./login/login.service";
import {Http} from "@angular/http";
import { ForgotComponent } from './forgot/forgot.component';
import { PasswordComponent } from './password/password.component';
import { BooksdetailsComponent } from './booksdetails/booksdetails.component';
import { PopularcoursesComponent } from './popularcourses/popularcourses.component';
import { MpcdetailsComponent } from './mpcdetails/mpcdetails.component';
// import { TutorComponent } from './tutor/tutor.component';
import {TeachersComponent} from "./teachers/teachers.component";
import { MoreTeachersComponent } from "./more-teachers/more-teachers.component";
import { BecameTutorComponent } from "./became-tutor/became-tutor.component";

import {  MatAutocompleteModule,  MatButtonModule,  MatButtonToggleModule,  MatCardModule,  MatCheckboxModule,  MatChipsModule,  MatDatepickerModule,  MatDialogModule,  MatExpansionModule,  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,  MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,  MatRadioModule,  MatRippleModule,  MatSelectModule,  MatSidenavModule,  MatSliderModule,  MatSlideToggleModule,  MatSnackBarModule,  MatSortModule,  MatTableModule,  MatTabsModule,  MatToolbarModule,  MatTooltipModule,  MatStepperModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    // CategoriesComponent,
    MainpageComponent,
    // SignupComponent,
    LoginComponent,
    // BooksComponent,
    // FlashcardComponent,
    FcdetailComponent,
    EventComponent,
    ScholarshipsComponent,
    ForgotComponent,
    PasswordComponent,
    BooksdetailsComponent,
    PopularcoursesComponent,
    MpcdetailsComponent,
    // TutorComponent,
    TeachersComponent,
    MoreTeachersComponent,
    BecameTutorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'NotesGenie' }),
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    MatAutocompleteModule,  MatButtonModule,  MatButtonToggleModule,  MatCardModule,  MatCheckboxModule,  MatChipsModule,  MatDatepickerModule,  MatDialogModule,  MatExpansionModule,  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,  MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,  MatRadioModule,  MatRippleModule,  MatSelectModule,  MatSidenavModule,  MatSliderModule,  MatSlideToggleModule,  MatSnackBarModule,  MatSortModule,  MatTableModule,  MatTabsModule,  MatToolbarModule,  MatTooltipModule,  MatStepperModule,
  ],
  exports: [
  ],
  providers: [
    FormBuilder,
    SignupService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

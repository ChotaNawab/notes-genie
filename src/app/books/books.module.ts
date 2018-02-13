import { NgModule } from '@angular/core';

import { BooksComponent }   from './books.component';
import {RouterModule, Routes} from "@angular/router";

const booksRoutes: Routes = [
  { path: '', component: BooksComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(booksRoutes)
  ],
  declarations: [
    BooksComponent
  ]
})
export class BooksModule {}

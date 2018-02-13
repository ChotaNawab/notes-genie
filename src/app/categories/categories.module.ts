import { NgModule } from '@angular/core';

import { CategoriesComponent }   from './categories.component';
import {RouterModule, Routes} from "@angular/router";

const categoriesRoutes: Routes = [
  { path: '', component: CategoriesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoriesRoutes)
  ],
  declarations: [
    CategoriesComponent
  ]
})
export class CategoriesModule {}

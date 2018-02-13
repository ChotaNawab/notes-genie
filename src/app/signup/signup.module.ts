import { NgModule } from '@angular/core';

import { SignupComponent }   from './signup.component';
import {RouterModule, Routes} from "@angular/router";

const signupRoutes: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(signupRoutes)
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule {}

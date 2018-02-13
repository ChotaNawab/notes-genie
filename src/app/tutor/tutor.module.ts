import { NgModule } from '@angular/core';

import { TutorComponent }   from './tutor.component';
import {RouterModule, Routes} from "@angular/router";

const tutorRoutes: Routes = [
  { path: '', component: TutorComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(tutorRoutes)
  ],
  declarations: [
    TutorComponent
  ]
})
export class TutorModule {}

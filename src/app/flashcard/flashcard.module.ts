import { NgModule } from '@angular/core';

import { FlashcardComponent }   from './flashcard.component';
import {RouterModule, Routes} from "@angular/router";

const flashcardRoutes: Routes = [
  { path: '', component: FlashcardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(flashcardRoutes)
  ],
  declarations: [
    FlashcardComponent
  ]
})
export class FlashcardModule {}

import { NgModule } from '@angular/core';

import { SignupComponent }   from './signup.component';
import { routing } from './signup.routing';

@NgModule({
  imports: [routing],
  declarations: [SignupComponent]
})
export class SignupModule {}
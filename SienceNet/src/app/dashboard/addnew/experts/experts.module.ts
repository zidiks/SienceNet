import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";

import { ExpertsComponent } from "./experts.component";


@NgModule({
  declarations: [ExpertsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatStepperModule
  ]
})
export class ExpertsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatListIconCssMatStyler } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatIconModule } from "@angular/material/icon";

import { ExpertsComponent } from "./experts.component";


@NgModule({
  declarations: [ExpertsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatStepperModule,
    MatListIconCssMatStyler,
    MatIconModule
  ]
})
export class ExpertsModule { }

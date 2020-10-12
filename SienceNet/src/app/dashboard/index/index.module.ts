import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from "./index.component";

import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";




@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ]
})
export class IndexModule { }

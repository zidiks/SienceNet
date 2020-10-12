import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './messenger.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [MessengerComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MessengerModule { }

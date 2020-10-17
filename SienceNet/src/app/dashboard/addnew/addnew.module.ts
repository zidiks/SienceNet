import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewComponent } from './addnew.component';

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


import { DashboardRoutingModule } from "../dashboard-routing.module";
import { ResourcesComponent } from './resources/resources.component';



@NgModule({
  declarations: [AddnewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DashboardRoutingModule
  ]
})
export class AddnewModule { }

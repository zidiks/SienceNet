import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddpostComponent } from './addpost/addpost.component';

import { DashboardComponent } from './dashboard.component';
import { MessengerComponent } from "./messenger/messenger.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'index', component: IndexComponent },
    { path: 'addpost', component: AddpostComponent },
    { path: 'messenger', component: MessengerComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddnewComponent } from "./addnew/addnew.component";
import { DashboardComponent } from './dashboard.component';
import { MessengerComponent } from "./messenger/messenger.component";
import { ExpertsComponent } from "./addnew/experts/experts.component";
import { ResourcesComponent } from "./addnew/resources/resources.component";
import { HelpComponent } from "./help/help.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'index', component: IndexComponent },
    { path: 'messenger', component: MessengerComponent },
    { path: 'addnew', component: AddnewComponent},
    { path: 'addnew/experts', component: ExpertsComponent},
    { path: 'addnew/resources', component: ResourcesComponent},
    { path: 'help', component: HelpComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

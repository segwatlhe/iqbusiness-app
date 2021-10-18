import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportViewComponent} from './report-view/report-view.component';
import {RegisterPersonComponent} from './register-person/register-person.component';


const routes: Routes = [
  { path: '', redirectTo: 'registerPerson', pathMatch: 'full' },
  { path: 'registerPerson', component: RegisterPersonComponent },
  { path: 'viewReport', component: ReportViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

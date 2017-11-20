import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllComponent } from './dashboard/all/all.component';
import { NewComponent } from './dashboard/new/new.component';
import { ShowComponent } from './dashboard/show/show.component';
import { UpdateComponent } from './dashboard/update/update.component';

const routes: Routes = [
	{path: "", pathMatch: "full", component: LoginComponent},
	{path: "recipes", component: DashboardComponent, children: [
		{path: "all", component: AllComponent},
		{path: "new", component: NewComponent},
		{path: "update/:id", component: UpdateComponent},
		{path: ":id", component: ShowComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

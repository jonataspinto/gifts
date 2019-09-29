import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ListComponent } from './containers/list/list.component';

const routes: Routes = [
  
  {path:"",component: HomeComponent},
  {path:"home",component: HomeComponent},
  {path:"list",component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

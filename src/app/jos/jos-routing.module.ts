import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';
import { TablekuComponent } from './tableku/tableku.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'button', component : ButtonComponent},
  {path : 'tableku', component : TablekuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JosRoutingModule { }

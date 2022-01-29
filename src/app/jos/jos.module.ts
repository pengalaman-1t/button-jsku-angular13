import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JosRoutingModule } from './jos-routing.module';
import { ButtonComponent, ButtonComponentDialog } from './button/button.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from '../shared/material.module';

@NgModule({
  declarations: [
    ButtonComponent,
    HomeComponent,
    ButtonComponentDialog
  ],
  imports: [
    CommonModule,
    JosRoutingModule,MaterialModule
  ]
})
export class JosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JosRoutingModule } from './jos-routing.module';
import { ButtonComponent, ButtonComponentDialog } from './button/button.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from '../shared/material.module';
import {CdkTableModule} from '@angular/cdk/table';
import { TablekuComponent } from './tableku/tableku.component';
import { ApikuComponent } from './apiku/apiku.component';

import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ButtonComponent,
    HomeComponent,
    ButtonComponentDialog,
    TablekuComponent,
    ApikuComponent
  ],
  imports: [
    CommonModule,
    JosRoutingModule,MaterialModule,CdkTableModule,
    BrowserModule,
    DataTablesModule,
    HttpClientModule
  ],

})
export class JosModule { }

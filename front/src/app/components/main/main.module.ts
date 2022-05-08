import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from './main.component'



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [

  ]
})
export class MainModule { }

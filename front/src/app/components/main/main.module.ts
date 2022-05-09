import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from './main.component'
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';



@NgModule({
  declarations: [
    MainComponent,
    FilterPipe
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

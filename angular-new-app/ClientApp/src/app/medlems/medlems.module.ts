import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedlemsRoutingModule } from './medlems-routing.module';
import { ListComponent } from './list/list.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    ListComponent,
    ReadComponent,
    EditComponent,
	CreateComponent
  ],
  imports: [
    CommonModule,
    MedlemsRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class MedlemsModule { }

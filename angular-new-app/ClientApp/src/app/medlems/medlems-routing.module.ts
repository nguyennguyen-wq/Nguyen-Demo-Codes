import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'medlems', redirectTo: 'medlems/list', pathMatch: 'full' },
  { path: 'medlems/list', component: ListComponent },
  { path: 'medlems/:id/read', component: ReadComponent },   
  { path: 'medlems/:id/edit', component: EditComponent },
  { path: 'medlems/create', component: CreateComponent }
];   
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedlemsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { HomeComponent } from './home/home.component';
import { ShowtaskComponent } from './showtask/showtask.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"addcmp",component:AddtaskComponent},
  {path:"showcmp",component:ShowtaskComponent},
  {path:"edittask/:editId",component:EdittaskComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DisplaytasksComponent } from './modules/tasks/displaytasks/displaytasks.component';
import { NewtaskComponent } from './modules/tasks/components/newtask/newtask.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: DisplaytasksComponent
  },
  {
    path: 'new-task',
    component: NewtaskComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

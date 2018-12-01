import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplaytasksComponent } from './displaytasks/displaytasks.component';
import { DisplaytaskComponent } from './components/displaytask/displaytask.component';

@NgModule({
  declarations: [
    DisplaytaskComponent,
    DisplaytasksComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [DisplaytasksComponent]
})
export class TasksModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DisplaytasksComponent } from './displaytasks/displaytasks.component';
import { DisplaytaskComponent } from './components/displaytask/displaytask.component';
import { NewtaskComponent } from './components/newtask/newtask.component';
import { RouterModule } from '@angular/router';
import { EdittaskComponent } from './components/displaytask/components/edittask/edittask.component';

@NgModule({
  declarations: [
    DisplaytaskComponent,
    DisplaytasksComponent,
    NewtaskComponent,
    EdittaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [DisplaytasksComponent]
})
export class TasksModule { }

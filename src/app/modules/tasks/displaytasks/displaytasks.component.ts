import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-displaytasks',
  templateUrl: './displaytasks.component.html',
  styleUrls: ['./displaytasks.component.css']
})
export class DisplaytasksComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];

  constructor(private http: HttpClient) {}

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {
    this.getTasks();
  }

  onClickView(id) {
    window.open("/"+id);
  }

}

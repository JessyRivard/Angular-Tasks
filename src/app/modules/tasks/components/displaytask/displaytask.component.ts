import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from 'src/app/shared/models/task';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks/' + this.route.snapshot.params["id"];
  public tasks: Task[]

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
    });
  }



}

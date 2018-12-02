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
  private taskRoute = 'http://localhost:3000/tasks/' + this.route.snapshot.params["id"];
  public task: Task[]

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.http.get<Task[]>(this.taskRoute).subscribe(task => {
      this.task = task;
    });
  }

  onClickReturn() {
    window.location.href = "#";
  }

}

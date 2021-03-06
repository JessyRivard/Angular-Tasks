import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Task } from '../../../../shared/models/task';
// import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];
  model: Task = new Task();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    var data = form.value;
    // cehck if name,lenght... != ''
    var newTaskData = {
      name:data.name,
      length:data.length,
      description:data.description,
      requirements:data.requirements,
    };
    this.http.post(this.tasksRoute, newTaskData).subscribe(response => {
      console.log(response)
    });
    window.location.href = "#";
  }

  onClickReturn() {
    window.location.href = "#";
  }
}

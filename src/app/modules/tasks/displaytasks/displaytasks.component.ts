import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
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
  @Output() taskView: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient, private elementRef:ElementRef) {}

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {
    this.getTasks();
  }

  ngAfterViewInit() {
    var d1 = this.elementRef.nativeElement.querySelector('.details');
    d1.insertAdjacentHTML('beforeend', '<app-displaytask></app-displaytask>')
  }

  onClickView(taskid) {
  }

  onClickCreate() {
    window.location.href = "new-task";
  }

}

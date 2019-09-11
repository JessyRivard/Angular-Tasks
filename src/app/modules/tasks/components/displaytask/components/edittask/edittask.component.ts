import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  @Input() task: Task;
  @Input() taskroute: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onClickDelete(id) {
    this.http.delete(this.taskroute).subscribe(response => {
      console.log(response)
    })
    window.location.href = "#";
  }

  onSubmit(form: NgForm) {
    var data = form.value;
    var updatedTaskData = {
      name:data.name,
      length:data.length,
      description:data.description,
      requirements:data.requirements
    }
    this.http.put(this.taskroute, updatedTaskData).subscribe(response => {
      console.log(response)
    })
    alert("Changes Saved")
  }

}

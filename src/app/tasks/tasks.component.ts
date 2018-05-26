import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  edit = false;

	newTaskForm = new FormControl()
	
	onNew(){
    this.edit = true;
    console.log("clicked and sett edit to true")
  }

  constructor() { }

  ngOnInit() {

  }
  tasks = [
            {
              "startDate":"11.12.2014",
              "name":"complete todo",
              "endDate":"554411"
            },
            {
              "startDate":"21415214",
              "name":"next task",
              "endDate":"121212"
            }
          ]
}

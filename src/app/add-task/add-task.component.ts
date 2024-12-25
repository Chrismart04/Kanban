import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-task',
    imports: [FormsModule, CommonModule],
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title = '';
  description = '';
  selectedColumnId = 1;

  constructor(public taskService: TaskService) {
    console.log(this.taskService.getColumns());
  }

  addTask() {
    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: 'todo'
    };

    console.log(`Adding task to column ID: ${this.selectedColumnId}`);
    this.taskService.addTask(this.selectedColumnId, newTask);


    this.title = '';
    this.description = '';
    this.selectedColumnId = 1;

  }
}

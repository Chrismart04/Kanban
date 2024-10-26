import { Component } from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../../models/task.model';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  title: string = '';
  description: string = '';
  selectedColumnId : number = 1;

  constructor(private taskService: TaskService) {}

  addTask() {
    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: 'todo'
    };
    this.taskService.addTask(this.selectedColumnId, newTask);
    this.title = '';
    this.description = '';
    this.selectedColumnId = 1;
  }
}

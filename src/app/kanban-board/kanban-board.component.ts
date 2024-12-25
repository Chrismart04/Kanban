import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Column, Task} from '../../models/task.model';
import {TaskService} from '../task.service';
import {AddTaskComponent} from '../add-task/add-task.component';
import {KanbanTaskComponent} from '../kanban-task/kanban-task.component';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
    selector: 'app-kanban-board',
    imports: [CommonModule, AddTaskComponent, KanbanTaskComponent, DragDropModule],
    templateUrl: './kanban-board.component.html',
    styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
  columns: Column[];
  constructor(private taskService: TaskService) {
    this.columns = this.taskService.getColumns();
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                         event.container.data,
                         event.previousIndex,
                         event.currentIndex);
    }
  }
}

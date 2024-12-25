import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Column} from '../../models/task.model';
import {TaskService} from '../task.service';
import {AddTaskComponent} from '../add-task/add-task.component';
import {KanbanColumnComponent} from '../kanban-column/kanban-column.component';
import {KanbanTaskComponent} from '../kanban-task/kanban-task.component';

@Component({
    selector: 'app-kanban-board',
    imports: [CommonModule, AddTaskComponent, KanbanColumnComponent, KanbanTaskComponent],
    templateUrl: './kanban-board.component.html',
    styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
  columns: Column[];
  constructor(private taskService: TaskService) {
    this.columns = this.taskService.getColumns();
  }
}

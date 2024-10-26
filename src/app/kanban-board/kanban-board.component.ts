import {Component} from '@angular/core';
import {Column} from '../../models/task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
  columns: Column[];
  constructor(private taskService: TaskService) {
    this.columns = this.taskService.getColumns();
  }
}

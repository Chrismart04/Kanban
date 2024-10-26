import { Component } from '@angular/core';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { KanbanTaskComponent } from './kanban-task/kanban-task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-kanban-board></app-kanban-board>',
  imports: [KanbanBoardComponent, AddTaskComponent, KanbanColumnComponent, KanbanTaskComponent],
})
export class AppComponent {}

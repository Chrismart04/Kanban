import { Component } from '@angular/core';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { KanbanTaskComponent } from './kanban-task/kanban-task.component';
@Component({
    selector: 'app-root',
    template: '<app-kanban-board></app-kanban-board>',
    imports: [KanbanBoardComponent, AddTaskComponent, KanbanTaskComponent]
})
export class AppComponent {}

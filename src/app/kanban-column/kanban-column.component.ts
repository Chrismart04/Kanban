import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Column } from '../../models/task.model';
import { KanbanTaskComponent } from '../kanban-task/kanban-task.component';
@Component({
  selector: 'app-kanban-column',
  standalone: true,
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.css'],
  imports: [CommonModule, KanbanTaskComponent],
})
export class KanbanColumnComponent {
  @Input() column!: Column;
}

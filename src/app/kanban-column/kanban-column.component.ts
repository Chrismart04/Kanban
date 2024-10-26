import { Component, Input } from '@angular/core';
import { Column } from '../../models/task.model';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.css'],
})
export class KanbanColumnComponent {
  @Input() column!: Column;
}

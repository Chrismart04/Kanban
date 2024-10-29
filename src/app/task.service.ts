import { Injectable } from '@angular/core';
import { Task, Column } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private columns: Column[] = [
    { id: 1, title: 'Por Hacer ⏰', tasks: [] },
    { id: 2, title: 'En Progreso 🎯', tasks: [] },
    { id: 3, title: 'Completado ✅', tasks: [] },
  ];

  getColumns(): Column[] {
    return this.columns;
  }

  addTask(columnId: number, task: Task) {
    const column = this.columns.find(c => c.id == columnId);
    if (column) {
      column.tasks.push(task);
    }
  }
}

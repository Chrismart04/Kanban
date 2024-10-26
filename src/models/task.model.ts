export interface Task {
  id: number;
  title : string;
  description : string;
  status : 'todo' | 'doing' | 'completed';
}

export interface Column {
  id : number;
  title : string;
  tasks : Task[];
}

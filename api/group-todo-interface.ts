import { ITodo } from './todo-interface';

export interface IGroupTodo {
  groupedTodos?: Array<{
    groupTitle: string;
    todos: ITodo;
  }>;
}

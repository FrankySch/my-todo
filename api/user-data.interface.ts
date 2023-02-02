import { IGroupTodo } from './group-todo-interface';
import { ITodo } from './todo-interface';

export interface IUserData {
  userId: string;
  groupedTodos?: IGroupTodo;
  singleTodos: ITodo;
}

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../shared/store';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';
import { Todo } from '../types/todoTypes';

export const useTodos = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return {
    todos,
    addTodo: (todo: Todo) => dispatch(addTodo(todo)),
    toggleTodo: (id: number) => dispatch(toggleTodo(id)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  };
};
import React from 'react';
import { Todo } from '../types/todoTypes';
import { useTodos } from '../model/useTodos';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={styles.todo_item}>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        className={todo.completed ? styles.todo_item_title_done : styles.todo_item_title_completed}
      >
        {todo.text}
      </span>
      <div>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

'use client'
import React from 'react';
import { useTodos } from '../model/useTodos';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
  const { todos } = useTodos();

  return (
    <div>
      <h4 className={styles.todo_title}>Tasks to do - {todos.filter(todo => !todo.completed).length}</h4>
      <div className={styles.todo_list}>
        {todos.filter(todo => !todo.completed).map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <h4 className={styles.todo_title}>Done - {todos.filter(todo => todo.completed).length}</h4>
      <div className={styles.todo_list}>
        {todos.filter(todo => todo.completed).map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

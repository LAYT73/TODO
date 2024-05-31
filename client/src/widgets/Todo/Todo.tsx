'use client';
import TodoInput from '@/features/todo/components/TodoInput';
import TodoList from '@/features/todo/components/TodoList';
import React from 'react';
import styles from './Todo.module.css';

const Todo: React.FC = () => {
  return (
    <div className={styles.todo}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;

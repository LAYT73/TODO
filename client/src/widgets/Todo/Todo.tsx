'use client';
import TodoInput from '@/features/todo/components/TodoInput';
import React from 'react';
import styles from './Todo.module.css';
import dynamic from 'next/dynamic';

const TodoList = dynamic(() => import('@/features/todo/components/TodoList'), { ssr: false })

const Todo: React.FC = () => {
  return (
    <div className={styles.todo}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;

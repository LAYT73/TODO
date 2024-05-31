'use client';
import Todo from '@/widgets/Todo/Todo';
import React from 'react';
import styles from './TodoPage.module.css';

const TodoPage: React.FC = () => {
  return (
    <div className={styles.todo_page}>
      <Todo/>
    </div>
  );
};

export default TodoPage;

'use client'
import React from 'react';
import { Todo } from '../types/todoTypes';
import { useTodos } from '../model/useTodos';
import styles from './TodoItem.module.css';
import Image from 'next/image';
import TrashBucket from '@/assets/TrashSimple.svg';
import Check from '@/assets/Check.svg';

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
      <div className={styles.todo_item__buttons}>
        {
          !todo.completed ? 
          <button onClick={() => toggleTodo(todo.id)}>
            <Image src={Check} alt=''/>
          </button>
          :
          <></>
        }
        <button onClick={() => deleteTodo(todo.id)}>
          <Image src={TrashBucket} alt=''/>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
